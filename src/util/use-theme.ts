import { useDarkMode } from "usehooks-ts";
import { useEffect } from "react";

export const useTheme = () => {
  const { isDarkMode, toggle } = useDarkMode();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return {
    toggle
  }
}