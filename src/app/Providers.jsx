"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className=" text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-[#121212] min-h-screen transition-colors duration-300 ">
        <div
          className="absolute w-full  h-full"
          style={{
            backgroundImage: "url('aura.avif')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
