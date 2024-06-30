import React from "react";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <div className="flex gap-12 dark:bg-gray-400 bg-sky-100 p-4 lg:text-lg justify-center ">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
