import StakeAccordion from "../components/stake-accordion.tsx";

const AboutStakeSection = () => {
  return (
    <div className="grid min-h-dvh place-items-center px-4 xl:px-0">
      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="w-full space-y-14">
          <p className="text-center text-2xl-1 font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-white">
            Все, что вы хотели знать о стейкинге — здесь
          </p>
          <StakeAccordion />
        </div>
        <div
          className="w-full rounded-full border border-[#4C4E4D] py-4 text-center font-medium text-[#4C4E4D] md:w-[225px] dark:border-[#CECFCF] dark:text-[#CECFCF]"
          role="button"
        >
          Задать другой вопрос
        </div>
      </div>
    </div>
  );
};

export default AboutStakeSection;
