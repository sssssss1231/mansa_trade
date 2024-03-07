import TariffCard from "./tariff-card.tsx";

const TariffCardsList = () => {
  return (
    <div className="grid grid-cols-2 place-content-center gap-4 md:grid-cols-3 lg:grid-cols-6">
      <TariffCard count={2} timeLaps="года" percent={8} />
      <TariffCard count={1} timeLaps="год" percent={6} />
      <TariffCard count={270} timeLaps="дней" percent={5} />
      <TariffCard count={180} timeLaps="дней" percent={4.5} />
      <TariffCard count={90} timeLaps="дней" percent={4} />
      <TariffCard count={30} timeLaps="дней" percent={3} />
    </div>
  );
};

export default TariffCardsList;
