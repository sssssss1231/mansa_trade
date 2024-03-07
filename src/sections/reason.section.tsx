import ReasonCardList from "../components/reason-card-list.tsx";

const ReasonSection = () => {
  return (
    <div className="grid min-h-[calc(100dvh+115px)] place-items-center px-4 xl:px-0">
      <div className="space-y-[60px]">
        <p className="text-center text-2xl-1 font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-white">
          6 причин стейкать криптовалюту c Mansa Trade
        </p>
        <ReasonCardList />
      </div>
    </div>
  );
};

export default ReasonSection;
