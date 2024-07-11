//situation #1
// export async function GET() {
//   return Response.json({
//     time: new Date().toLocaleTimeString(),
//   });
// }

//after building and running that built application, even after every reload, the time doesnt change.
//this is due to caching
//so how to opt out of this caching

//situation #2
export const dynamic = "force-dynamic"; //by default, the value of dynamic is "auto" "

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}

//after building and running that built application, this time, after every reload, the time changes.
