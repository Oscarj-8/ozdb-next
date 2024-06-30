import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="relative z-40 flex gap-12 dark:bg-[#282828] bg-sky-100 p-4 lg:text-lg justify-center ">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
