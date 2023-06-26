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



export async function GET(request: Request, response: Response) {
    console.log("koo");
    console.log("pooo");
    

    //return new Response()
    
  }
  
export async function POST(request: Request, response: Response) {
    console.log("juuu");
    console.log("dbsdvfs");

    //return new Response()
    
  }