import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/util";

export const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(()=>
  localStorage.getItem("theme") === "dark"
  );

  // useeffefect always run when there is change in any one dependency variable
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // dependency
  }, [isDarkMode]);


  return (
    <button
    // change theme based on click
      onClick={() => setDarkMode(!isDarkMode)}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-blue-200" />
      )}
    </button>
  );
};
