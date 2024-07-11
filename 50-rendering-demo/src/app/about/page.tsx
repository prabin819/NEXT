//import { useState } from "react";
import { cookies } from "next/headers";

export default function AboutPage() {
  //const [name, setName] = useState("");

  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  console.log("about server component");
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

//shows error cuz there is no such thing called state in the server
