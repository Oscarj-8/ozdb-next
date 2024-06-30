// "use client";

// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// const NavBarItem = ({ title, param }) => {
//   const searchParams = useSearchParams();
//   const genre = searchParams.get("genre");
//   return (
//     <div>
//       <Link
//         className={`hover:text-sky-600 dark:hover:text-white font-semibold ${
//           genre === param
//             ? "underline underline-offset-8 decoration-4 decoration-sky-500 rounded-lg"
//             : ""
//         }`}
//         href={`/?genre=${param}`}
//       >
//         {title}
//       </Link>
//     </div>
//   );
// };

// export default NavBarItem;

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const NavBarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`relative hover:text-sky-600 dark:hover:text-white font-semibold `}
        href={`/?genre=${param}`}
      >
        <div
          className={`${
            genre === param
              ? "absolute inset-0 bg-gradient-to-r from-sky-500 via-pink-500 to-yellow-500 rounded-lg opacity-70 blur-lg animate-shine"
              : ""
          } `}
        ></div>
        {title}
      </Link>
    </div>
  );
};

export default function NavBarItemWrapper(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBarItem {...props} />
    </Suspense>
  );
}
