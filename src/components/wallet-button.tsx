import { BsWallet } from "react-icons/bs";
import { cn } from "../util/cn.ts";

const WalletButton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-x-2 rounded-[48px] border border-light-gray px-4 py-[.619rem] text-sm font-semibold text-light-gray dark:border-dark-green dark:text-dark-green",
        className,
      )}
      role="button"
    >
      <BsWallet className="h-3.5 w-4 dark:text-green-400" />
      Connect wallet
    </div>
  );
};

export default WalletButton;
