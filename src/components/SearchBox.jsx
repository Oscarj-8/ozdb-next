"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex max-w-7xl mx-auto items-center justify-between gap-2"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full p-4 h-14 rounded-md placeholder:text-gray-500 outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        className="text-white h-fit disabled:opacity-70 bg-sky-500 px-4 py-2 rounded-md font-medium"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
