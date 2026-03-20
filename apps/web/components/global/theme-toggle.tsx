"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label="Toggle theme"
      className="hover:bg-muted focus:ring-ring cursor-pointer rounded-md p-2 transition-all focus:ring-2 focus:outline-none"
    >
      {!mounted && <Laptop className="h-5 w-5" />}

      {mounted && theme === "light" && (
        <SunMedium className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
      )}

      {mounted && theme === "dark" && (
        <MoonStar className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
      )}

      {mounted && theme === "system" && (
        <Laptop className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
      )}
    </button>
  );
}
