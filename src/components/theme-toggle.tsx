"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center justify-center">
      <button onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300"
        aria-label="Toggle theme">

        <Sun className={`absolute h-6 w-6 transition-all duration-500 transform ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}/>
        <Moon
          className={`absolute h-5 w-5 transition-all duration-500 transform ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}/>

      </button>
    </div>
  );
}
