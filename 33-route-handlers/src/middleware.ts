// approach #1 => custom matcher config
// import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile",
// };       //this matcher is where the middleware applies to

// approach #2 => conditional statements
// import { NextResponse, type NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     //return NextResponse.redirect(new URL("/hello", request.url));
//     return NextResponse.rewrite(new URL("/hello", request.url));
//   }
// }

//use of middleware in cookies and headers
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");
  return response;
}
