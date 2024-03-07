import CTAButton from "../components/CTA-button.tsx";

const HeroSection = () => {
  return (
    <div className="grid min-h-[calc(100dvh-68px)] place-items-center text-white xl:min-h-[calc(100dvh-65px)]">
      <div className="flex flex-col items-center gap-y-9">
        <div className="space-y-5.5 px-4 text-center lg:px-0">
          <p className="text-4xl font-bold leading-11 text-light-text md:text-5xl-1 dark:text-dark-text">
            Стейкайте токен MansaTrade и увеличивайте свою прибыль
          </p>
          <p className="text-lg leading-6.5 text-light-gray dark:text-dark-gray">
            Доходность до 8% годовых, эксклюзивный доступ к новым функциям
            платформы и много другое
          </p>
        </div>
        <CTAButton className="w-58 md:w-45" btnText="Купить MNS" />
      </div>
    </div>
  );
};

export default HeroSection;
