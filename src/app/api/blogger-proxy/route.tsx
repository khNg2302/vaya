import { NextRequest } from "next/server";

// api/blogger-proxy/route.js (Next.js App Router)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bloggerUrl = searchParams.get("url");

    if (!bloggerUrl) {
      return new Response("Missing url parameter", { status: 400 });
    }

    const response = await fetch(bloggerUrl);

    const data = await response.json();

    return Response.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (err) {
    console.log(err.message);
  }
}
