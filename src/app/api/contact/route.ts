import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const json = await request.json()

  return new Response(JSON.stringify(json), { status: 200 })  
};