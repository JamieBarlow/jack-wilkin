"use server";

import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = req.headers.get("CMS-Secret");
  if (secret !== process.env.CMS_SECRET) {
    return new Response("Invalid credentials", {
      status: 401,
    });
  }
  revalidatePath("/");
  console.log("revalidating...");

  return Response.json({
    revalidated: true,
    now: Date.now(),
  });
}
