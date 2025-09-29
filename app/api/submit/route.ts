"use server";
import { NextResponse, NextRequest } from "next/server";
import type { FormFields } from "@/app/components/ContactForm";

export async function POST(request: NextRequest) {
  try {
    const data: FormFields = await request.json();
    const { firstName, lastName, email, phone, message } = data;

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_CONTACTS_TABLE}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_ADMIN_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: { firstName, lastName, email, phone, message },
        }),
      }
    );

    if (airtableRes.ok) {
      return NextResponse.json({ data: "ok" });
    }

    const errorData = await airtableRes.json();
    return NextResponse.json({ error: errorData }, { status: 400 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to parse request or submit to Airtable" },
      { status: 400 }
    );
  }
}
