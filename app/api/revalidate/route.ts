"use server";

import { revalidatePath } from "next/cache";

interface Concept {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
}

export async function POST(req: Request) {
  const secret = req.headers.get("CMS-Secret");
  if (secret !== process.env.CMS_SECRET) {
    return new Response("Invalid credentials", {
      status: 401,
    });
  }
  const body = await req.json();
  const pathsRevalidated = [];

  // Handling revalidation of page(s) using taxonomy
  const concepts: Concept[] = body?.metadata?.concepts ?? [];
  const pageIds = concepts.map((c) => c.sys.id);
  for (const id of pageIds) {
    switch (id) {
      case "homePage":
        revalidatePath("/");
        pathsRevalidated.push("/");
        break;
      case "about-me":
        revalidatePath("/about-me");
        pathsRevalidated.push("about-me");
        break;
      case "contact":
        revalidatePath("/contact");
        pathsRevalidated.push("/contact");
        break;
      case "helpful-links":
        revalidatePath("/helpful-links");
        pathsRevalidated.push("/helpful-links");
        break;
      case "privacy-notice":
        revalidatePath("/privacy-notice");
        pathsRevalidated.push("/privacy-notice");
        break;
    }
  }

  // Handling revalidation of pages using content type
  const contentType = body?.sys.contentType.sys.id;
  if (concepts.length === 0) {
    switch (contentType) {
      case "page":
        {
          const pageId = body?.sys.id;
          switch (pageId) {
            case "1U10T6wYzOqKLXlgZ3AP06":
              revalidatePath("/");
              pathsRevalidated.push("/");
              break;
            case "1Rxtz0OsdLte04vd9WdoHw":
              revalidatePath("/about-me");
              pathsRevalidated.push("/about-me");
              break;
            case "7sIgzLCJ3Q0FvZwcKUvbeC":
              revalidatePath("/contact");
              pathsRevalidated.push("/contact");
              break;
            case "G11VY8zzXOvQ7ACWsVdSN":
              revalidatePath("/helpful-links");
              pathsRevalidated.push("/helpful-links");
              break;
            case "23GOgqfAiX2UlcaG2heO5K":
              revalidatePath("/privacy-notice");
              pathsRevalidated.push("/privacy-notice");
              break;
          }
        }
        break;
      case "faq":
        revalidatePath("/");
        pathsRevalidated.push("/");
        break;
      case "contactDetails":
        revalidatePath("/contact");
        pathsRevalidated.push("/contact");
        break;
      default:
        revalidatePath("/", "layout");
        pathsRevalidated.push("all paths");
    }
  }

  return Response.json({
    revalidated: true,
    now: Date.now(),
    typeUpdated: contentType || null,
    pagesUpdated: pageIds || null,
    pathsRevalidated,
  });
}
