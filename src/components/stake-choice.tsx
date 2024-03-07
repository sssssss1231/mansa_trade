import { useState } from "react";
import { cn } from "../util/cn.ts";

const StakeChoice = () => {
  const [choice, setChoice] = useState(0);

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="rounded-full border border-[#E0E6E0] bg-[#F9FBF9] p-1.5 dark:border-[#202221] dark:bg-[#141414]">
        <div className="flex items-center">
          <button
            onClick={() => setChoice(0)}
            className={cn(
              "w-full rounded-full py-2.5 text-[#202020] dark:text-[#9E9E9E]",
              {
                "bg-[#202020] text-white dark:bg-dark-white dark:text-black":
                  choice == 0,
              },
            )}
          >
            Stake MNS
          </button>
          <button
            className={cn(
              "w-full rounded-full py-2.5 text-[#202020] dark:text-[#9E9E9E]",
              {
                "bg-[#202020] text-white dark:bg-dark-white dark:text-[#010101]":
                  choice == 1,
              },
            )}
            onClick={() => setChoice(1)}
          >
            Stake SOL
          </button>
        </div>
      </div>
    </div>
  );
};

export default StakeChoice;
