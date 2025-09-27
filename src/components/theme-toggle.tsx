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

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const getGradientClasses = () => {
    const baseClasses = "absolute -inset-0.5 w-8 h-8 rounded-full opacity-80 transition-all duration-300";
    const themeClasses = isDark 
      ? "bg-gradient-to-r from-neutral-600 via-neutral-700 to-neutral-600"
      : "bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200";
    return `${baseClasses} ${themeClasses}`;
  };

  const getSunClasses = () => {
    const baseClasses = "absolute size-[16px] transition-all duration-500 transform -translate-x-2 -translate-y-2";
    const stateClasses = isDark 
      ? "translate3d(0,0,0) rotate-90 scale-0 opacity-0"
      : "translate3d(0,0,0) rotate-0 scale-100 opacity-100";
    return `${baseClasses} ${stateClasses}`;
  };

  const getMoonClasses = () => {
    const baseClasses = "absolute size-4 transition-all duration-500 transform -translate-x-2 -translate-y-2 text-white";
    const stateClasses = isDark 
      ? "translate3d(0,0,0) rotate-0 scale-100 opacity-100"
      : "translate3d(0,0,0) -rotate-90 scale-0 opacity-0";
    return `${baseClasses} ${stateClasses}`;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative p-[2px] border border-transparent rounded-full hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300">
        <div className="relative">

          <div className={getGradientClasses()} />
          <button onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="relative w-7 h-7 rounded-full shadow-lg flex items-center justify-center overflow-hidden z-10 cursor-pointer transition-all duration-300 bg-white dark:bg-neutral-950">
            <div className="absolute inset-1 rounded-full transition-all duration-300" />
            
            <div className="relative z-10">
              <Sun className={getSunClasses()} />
              <Moon className={getMoonClasses()} />
            </div>
          </button>

        </div>
      </div>
    </div>
  )
}
