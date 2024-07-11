// method #1
// import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));

//   return new Response("this is profile api");
// }

// // method #2
// import { headers } from "next/headers";
// import { NextRequest } from "next/server";

// export async function GET() {
//   const headerList = headers();

//   console.log(headerList.get("Authorization"));

//   //return new Response("<h1>this is profile api</h1>"); //rendered as it is cuz content type is text/plain
//   return new Response("<h1>this is profile api</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//     },
//   }); //rendered as styled with H1 cuz content type is text/html
// }

// cookie:method #1
// import { headers } from "next/headers";
// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const headerList = headers();

//   const theme = request.cookies.get("theme");
//   console.log(headerList.get("Authorization"));
//   console.log(theme);

//   //return new Response("<h1>this is profile api</h1>"); //rendered as it is cuz content type is text/plain
//   return new Response("<h1>this is profile api</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//       "Set-Cookie": "theme=dark",
//     },
//   }); //rendered as styled with H1 cuz content type is text/html
// }

// cookie:method #2
import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headerList = headers();

  cookies().set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");
  console.log(headerList.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("resultsPerPage"));

  //return new Response("<h1>this is profile api</h1>"); //rendered as it is cuz content type is text/plain
  return new Response("<h1>this is profile api</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  }); //rendered as styled with H1 cuz content type is text/html
}
