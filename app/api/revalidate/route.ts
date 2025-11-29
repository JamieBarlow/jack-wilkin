"use server";

import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("CMS-Secret");
  if (secret !== process.env.CMS_SECRET) {
    return new Response("Invalid credentials", {
      status: 401,
    });
  }
  const body = await req.json();
  const contentType = body?.sys.contentType.sys.id;
  console.log(contentType);

  switch (contentType) {
    case "faq":
      revalidatePath("/");
      break;
    case "contactDetails":
      revalidatePath("/contact");
      break;
    default:
      revalidatePath("/", "layout");
  }

  return Response.json({
    revalidated: true,
    now: Date.now(),
    pagesUpdated: contentType || null,
  });
}
