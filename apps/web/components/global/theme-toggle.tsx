"use client";

import { MoonStar, SunMedium, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <div
      onClick={cycleTheme}
      role="button"
      aria-label="Toggle theme"
      className="hover:bg-muted focus:ring-ring cursor-pointer rounded-md p-2 transition-all focus:ring-2 focus:outline-none"
    >
      {theme === "light" && (
        <SunMedium className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
      )}

      {theme === "dark" && (
        <MoonStar className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
      )}

      {theme === "system" && (
        <Laptop className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
      )}
    </div>
  );
}
