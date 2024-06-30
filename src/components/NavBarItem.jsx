"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
const NavBarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-sky-600 dark:hover:text-white font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-sky-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;
