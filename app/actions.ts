"use server";
import { neon } from "@neondatabase/serverless";

export async function getWaitlistCount() {
  const DATABASE_URL = process.env.DATABASE_URL!;
  const sql = neon(DATABASE_URL!);

  const rawData = await sql`
    SELECT COUNT(*) AS count FROM waitlist;
  `;

  if (rawData.length > 0) {
    return rawData[0]?.count;
  }

  return 0;
}

export async function addWaitlistEntry({
  email,
  feature,
}: {
  email: string;
  feature?: string;
}) {
  const DATABASE_URL = process.env.DATABASE_URL!;
  const sql = neon(DATABASE_URL!);

  let data;

  if (feature) {
    data =
      await sql`INSERT INTO waitlist (email, feature_request) VALUES (${email}, ${feature})`;
  } else {
    data = await sql`INSERT INTO waitlist (email) VALUES (${email})`;
  }

  return data;
}
