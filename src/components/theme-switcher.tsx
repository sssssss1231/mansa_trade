import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useTheme } from "../util/use-theme.ts";

const ThemeSwitcher = () => {
  const { toggle } = useTheme();

  return (
    <div
      className="flex w-[4rem] cursor-pointer items-center justify-between rounded-full border border-[#E9E9E9] bg-[#E4ECE7] px-2 py-1.5 dark:flex dark:flex-row-reverse dark:border-[#1F343B] dark:bg-black dark:text-white"
      onClick={toggle}
    >
      <div className="size-5 rounded-full bg-white" />
      <BsFillMoonStarsFill size={16} className="hidden dark:block" />
      <BsSun size={17} className="dark:hidden" />
    </div>
  );
};

export default ThemeSwitcher;
