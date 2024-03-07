import Calculator from "../components/calculator.tsx";

const CalcSection = () => {
  return (
    <div className="grid min-h-[calc(100dvh-68px)] place-items-center px-4 lg:min-h-[calc(85dvh-65px)] xl:px-0">
      <Calculator />
    </div>
  );
};

export default CalcSection;
