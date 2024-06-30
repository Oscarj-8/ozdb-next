"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-indigo-950 min-h-screen  transition-colors duration-300 ">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
