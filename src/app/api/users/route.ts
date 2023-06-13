// import { sql } from "@vercel/postgres";




// export default async function Users({
//   params
// } : {
//   params: { user: string }
// }): Promise<JSX.Element> {
//   const {rows} = await sql`SELECT * from pets`;
//   console.log(rows);
  

//   return (
//     <></>
//   );
// }



export function GET(request: Request, response: Response) {
    console.log(request);
    console.log(response);
    

    return new Response()
    
  }
  
export function POST(request: Request) {
    console.log("POST request");
    
  }