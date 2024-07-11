// method #1
// import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));

//   return new Response("this is profile api");
// }

// method #2
import { headers } from "next/headers";

export async function GET() {
  const headerList = headers();

  console.log(headerList.get("Authorization"));

  return new Response("this is profile api");
}
