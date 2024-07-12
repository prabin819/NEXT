"use client";
import "client-only";

import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  console.log(`client route rendered`);

  const result = clientSideFunction();

  return (
    <>
      <h1>ClientRoutePage</h1>
      <p>{result}</p>
    </>
  );
}
