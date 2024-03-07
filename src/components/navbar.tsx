import { useEffect, useState } from "react";
import Logo from "./logo.tsx";
import { BsList } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import LangSwitcher from "./lang-switcher.tsx";
import ThemeSwitcher from "./theme-switcher.tsx";
import WalletButton from "./wallet-button.tsx";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "sticky left-0 top-0 px-4 py-5 backdrop-blur backdrop-filter md:px-8",
        {
          "bg-white dark:bg-black": isOpen,
        },
      )}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Logo />
        <ul className="hidden gap-x-8 text-sm font-medium *:hover:cursor-pointer lg:flex dark:text-dark-white">
          <li>Тарифы</li>
          <li>Калькулятор</li>
          <li>Преимущество</li>
          <li>FAQ</li>
        </ul>
        <div className="hidden items-center gap-x-4 lg:flex">
          <div className="flex items-center gap-x-3">
            <LangSwitcher />
            <ThemeSwitcher />
          </div>
          <WalletButton />
        </div>
        <div className="lg:hidden" onClick={() => setIsOpen((v) => !v)}>
          {isOpen ? (
            <RxCross2 className="size-8 text-light-white dark:text-dark-white" />
          ) : (
            <BsList className="size-8 text-light-white dark:text-dark-white" />
          )}
        </div>
      </div>
      <div
        className="fixed left-0 top-[64px] z-[100] hidden h-[calc(100vh-64px)] w-full bg-white data-[isopen=true]:block dark:bg-black"
        data-isopen={isOpen}
      >
        <div className="flex h-full flex-col justify-between px-4 pb-4 pt-11 lg:hidden">
          <ul className="space-y-7 text-center text-2xl font-semibold text-light-white dark:text-dark-white">
            <li>Тарифы</li>
            <li>Калькулятор</li>
            <li>Преимущество</li>
            <li>FAQ</li>
          </ul>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-x-5">
              <LangSwitcher />
              <ThemeSwitcher />
            </div>
            <WalletButton className="mx-auto max-w-screen-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
