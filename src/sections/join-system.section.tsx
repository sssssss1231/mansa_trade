import CTAButton from "../components/CTA-button.tsx";

const JoinSystemSection = () => {
  return (
    <div className="grid min-h-[calc(100dvh+300px)] place-items-center px-4 md:min-h-[calc(100dvh)] xl:px-0">
      <div className="rounded-[30px] bg-[#EFEAF6] px-4 py-9 lg:px-10 dark:bg-[#20172B]">
        <div className="flex flex-col items-center justify-center gap-y-12">
          <div className="space-y-6 text-center lg:px-[55px]">
            <p className="text-[28px] font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-white">
              Присоединяйтесь к экосистеме Mansa Trade и увеличивайте прибыль до
              х3–5 раз
            </p>
            <p className="text-[#4C4E4D] dark:text-[#CECFCF]">
              Зарабатывайте и храните токены MansaTrade, чтобы использовать все
              возможности платформы и приумножить доход. Стейкинг позволит
              принимать активное участие в развитии децентрализованной биржи и
              получить максимум выгоды от торговли. Начните прямо сейчас —
              заморозьте часть средств в криптокошельке и обеспечьте себе
              достойный пассивный доход.
            </p>
          </div>
          <CTAButton
            btnText="Начать стейкать"
            className="w-[184px] text-[17px] font-semibold leading-[20.57px]"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinSystemSection;
