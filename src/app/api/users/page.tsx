import { sql } from "@vercel/postgres";

export default async function Users({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const {rows} = await sql`SELECT * from pets`;
  console.log(rows);
  

  return (
<></>
  );
}