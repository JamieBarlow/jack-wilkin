"use server";

import { revalidatePath } from "next/cache";
import { revalidateTag } from "next/cache";

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

  // Handling assets e.g. images
  const sysType = body?.sys?.type; // Entry or Asset
  if (sysType === "Asset") {
    revalidatePath("/", "layout");
    pathsRevalidated.push("all paths");
    return Response.json({
      revalidated: true,
      now: Date.now(),
      pathsRevalidated,
    });
  }

  // Handling revalidation of page(s) using taxonomy
  const concepts: Concept[] = body?.metadata?.concepts ?? [];
  const pageIds = concepts.map((c) => c.sys.id);
  if (concepts.length > 0) {
    const msg = "Revalidated by taxonomy: ";
    for (const id of pageIds) {
      switch (id) {
        case "homePage":
          revalidatePath("/");
          pathsRevalidated.push(msg + "/");
          break;
        case "about-me":
          revalidatePath("/about-me");
          pathsRevalidated.push(msg + "about-me");
          break;
        case "contact":
          revalidatePath("/contact");
          pathsRevalidated.push(msg + "/contact");
          break;
        case "helpful-links":
          revalidatePath("/helpful-links");
          pathsRevalidated.push(msg + "/helpful-links");
          break;
        case "privacy-notice":
          revalidatePath("/privacy-notice");
          pathsRevalidated.push(msg + "/privacy-notice");
          break;
        case "training":
          revalidatePath("/training");
          pathsRevalidated.push(msg + "/training");
          break;
      }
    }
  }

  // Handling revalidation of pages using content type
  const contentType = body?.sys.contentType.sys.id;
  if (concepts.length === 0) {
    const msg = "Revalidated by content type: ";
    switch (contentType) {
      case "page":
        {
          const pageId = body?.sys.id;
          switch (pageId) {
            case "1U10T6wYzOqKLXlgZ3AP06":
              revalidatePath("/");
              pathsRevalidated.push(msg + "/");
              break;
            case "1Rxtz0OsdLte04vd9WdoHw":
              revalidatePath("/about-me");
              pathsRevalidated.push(msg + "/about-me");
              break;
            case "7sIgzLCJ3Q0FvZwcKUvbeC":
              revalidatePath("/contact");
              pathsRevalidated.push(msg + "/contact");
              break;
            case "G11VY8zzXOvQ7ACWsVdSN":
              revalidatePath("/helpful-links");
              pathsRevalidated.push(msg + "/helpful-links");
              break;
            case "23GOgqfAiX2UlcaG2heO5K":
              revalidatePath("/privacy-notice");
              pathsRevalidated.push(msg + "/privacy-notice");
              break;
            case "6ppUDm6n0JRiQoOs5T7js8":
              revalidatePath("/training");
              pathsRevalidated.push(msg + "/training");
              break;
            default:
              revalidatePath("/", "layout");
              pathsRevalidated.push(msg + "all paths");
          }
        }
        break;
      case "faq":
        revalidatePath("/");
        pathsRevalidated.push(msg + "/");
        break;
      case "contactDetails":
        revalidatePath("/contact");
        pathsRevalidated.push(msg + "/contact");
        break;
      // Handling common layout elements
      case "navigation":
        revalidateTag("navigation", "max");
        pathsRevalidated.push(msg + "navigation layout");
        break;
      case "link":
        revalidateTag("navigation", "max");
        pathsRevalidated.push(msg + "nav links");
        break;
      case "section":
        revalidateTag("section", "max");
        pathsRevalidated.push(msg + "section elements");
        break;
      case "footer":
        revalidateTag("footer", "max");
        pathsRevalidated.push(msg + "footer elements");
        break;
      case "contactDetails":
        revalidateTag("contactDetails", "max");
        pathsRevalidated.push(msg + "Contact details");
        break;
      default:
        revalidatePath("/", "layout");
        pathsRevalidated.push(msg + "all paths");
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
