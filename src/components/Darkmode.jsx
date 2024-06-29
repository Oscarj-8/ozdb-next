"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
const Darkmode = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme == "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-lg cursor-pointer hover:text-sky-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-lg cursor-pointer hover:text-sky-500"
        />
      )}
    </div>
  );
};

export default Darkmode;
