"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("prabin");
  console.log("dashboard client component");
  return (
    <div>
      <h1>DashboardPage</h1>

      <input
        style={{ color: "black" }}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>{name}</h2>
    </div>
  );
}
