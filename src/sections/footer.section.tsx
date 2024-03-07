import Logo from "../components/logo.tsx";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const FooterSection = () => {
  return (
    <div className="bg-[#141414]">
      <div className="mx-auto max-w-screen-lg">
        <div className="px-4 py-10 text-white">
          <div className="flex flex-col items-center justify-center border-b border-b-[#262626] lg:flex-row lg:justify-between">
            <Logo
              className="lg:self-start lg:pr-32"
              classNameText="text-white"
            />
            <div className="flex w-full items-center justify-between pb-10 pt-6 lg:pt-0">
              <ul className="w-full space-y-3 self-start pl-2 text-sm">
                <li>Tariffs</li>
                <li>APY Calculator</li>
                <li>Advantages</li>
                <li>FAQ</li>
              </ul>
              <ul className="flex w-full flex-col justify-center space-y-3 border-l border-l-[#262626] pl-6 pr-2 text-start text-sm md:items-start">
                <li className="flex items-center gap-x-2.5">
                  <p>P2P Dex</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>Support Portal</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>Wiki</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>Litepaper</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>API</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>Сoingecko</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>CoinMarketCap</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
                <li className="flex items-center gap-x-2.5">
                  <p>solscan</p>
                  <BsBoxArrowUpRight size={12} />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-row-reverse items-center justify-between lg:flex">
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 pt-5">
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
              <BsGithub size={24} />
            </div>

            <div className="flex flex-col items-center justify-center space-y-7 text-gray-400 lg:flex-row-reverse lg:space-y-0 lg:pt-4">
              <div className="flex flex-wrap items-center justify-center gap-4 pt-10 *:underline lg:pt-0">
                <p>Terms & Conditions</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
              </div>
              <p className="lg:pr-7">© Copyright 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
