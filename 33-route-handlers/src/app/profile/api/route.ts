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

  //return new Response("<h1>this is profile api</h1>"); //rendered as it is cuz content type is text/plain
  return new Response("<h1>this is profile api</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  }); //rendered as styled with H1 cuz content type is text/html
}
