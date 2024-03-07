import { TfiWorld } from "react-icons/tfi";

const LangSwitcher = () => {
  return (
    <div className="flex items-center gap-x-2 text-[15px] font-medium dark:text-dark-white">
      <TfiWorld size={18} />
      <span className="pt-0.5">RU</span>
    </div>
  );
};

export default LangSwitcher;
