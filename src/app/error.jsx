"use client";

import { useEffect } from "react";
export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong, Please try again</h1>
      <button className="hover:text-sky-600" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
