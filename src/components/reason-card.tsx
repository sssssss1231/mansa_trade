import { JSX } from "react";
import { cn } from "../util/cn.ts";

type ReasonCardProps = {
  icon: JSX.Element;
  className: string;
  title: string;
  description: string;
};

const ReasonCard = ({
  icon,
  className,
  description,
  title,
}: ReasonCardProps) => {
  return (
    <div className="w-full rounded-[20px] border border-gray-100 bg-[#FAFAFA99] dark:border-none dark:bg-[#141414]">
      <div className="space-y-5 p-6">
        <div
          className={cn(
            "flex size-[50px] items-center justify-center rounded-xl",
            className,
          )}
        >
          {icon}
        </div>
        <div className="space-y-2 dark:text-white">
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="text-sm-1 leading-5 text-[#151515] dark:text-[#9E9E9E]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReasonCard;
