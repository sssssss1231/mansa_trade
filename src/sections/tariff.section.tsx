import StakeChoice from "../components/stake-choice.tsx";
import TariffCardsList from "../components/tariff-cards-list.tsx";
import WalletInput from "../components/wallet-input.tsx";

const TariffSection = () => {
  return (
    <div className="grid min-h-[calc(100dvh-68px)] place-items-center text-center">
      <div className="space-y-12">
        <div className="mx-auto max-w-[920px] space-y-9 px-4 xl:px-0">
          <div className="flex flex-col items-center justify-center space-y-9">
            <div className="space-y-6">
              <p className="text-2xl-1 font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-white">
                6 тарифов на выбор: для новичков, продвинутых и настоящих
                экспертов
              </p>
              <p className="text-lg leading-6.5 text-[#202020] dark:text-[#CECFCF]">
                Выберите оптимальный тариф и застейкайте активы, чтобы получать
                максимальную прибыль.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <StakeChoice />
            <TariffCardsList />
          </div>
        </div>
        <WalletInput />
      </div>
    </div>
  );
};

export default TariffSection;
