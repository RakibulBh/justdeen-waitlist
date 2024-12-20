import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL!;

export async function getWaitlistCount() {
  const sql = neon(DATABASE_URL!);
  const data = await sql`
    SELECT COUNT(*) FROM waitlist;
  `;
  return data;
}

export async function addWaitlistEntry({
  email,
  feature,
}: {
  email: string;
  feature?: string;
}) {
  const sql = neon(DATABASE_URL!);

  const data = await `${
    feature
      ? sql`INSERT INTO waitlist (email, feature) VALUES (${email}, ${feature})`
      : sql`INSERT INTO waitlist (email) VALUES (${email})`
  };`;

  return data;
}
