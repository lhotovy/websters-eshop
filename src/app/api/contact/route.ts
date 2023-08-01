import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
  const json = await request.json()  

  return new NextResponse(JSON.stringify(json), {status: 200})  
};