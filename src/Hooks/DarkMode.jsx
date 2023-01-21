import { useContext, useEffect } from "react";
import { themeContext } from "Context/Theme/ThemeState";

export const useDarkMode = () => {
  const { theme, setTheme } = useContext(themeContext);
  // console.log("theme-dark", theme);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
     document.documentElement.className =theme
    document.body.classList.add("dark:bg-slate-900")
  });
  return { theme, toggleTheme };
};







