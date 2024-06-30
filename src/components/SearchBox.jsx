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
      className="flex max-w-7xl mx-auto items-center gap-2 mt-6"
      onSubmit={handleSubmit}
    >
      <input
        className="border p-4 h-10 border-[#282828] shadow-sm shadow-[#282828] rounded-md placeholder:text-gray-500 outline-none bg-transparent "
        type="text"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        className="text-white  disabled:opacity-70 bg-sky-500 px-4 py-2 rounded-md font-medium"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
