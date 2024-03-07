import { cn } from "../util/cn.ts";

const CtaButton = ({
  className,
  btnText,
}: {
  className?: string;
  btnText: string;
}) => {
  return (
    <button
      className={cn(
        "rounded-full bg-[#0EE78C] py-4 text-base-1 font-semibold text-[#131212] dark:bg-[#16F195]",
        className,
      )}
    >
      {btnText}
    </button>
  );
};

export default CtaButton;
