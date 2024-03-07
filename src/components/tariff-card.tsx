type TariffCardProps = {
  count: number;
  timeLaps: string;
  percent: number;
};

const TariffCard = ({ count, timeLaps, percent }: TariffCardProps) => {
  return (
    <div className="rounded-3xl bg-[#F9FBF9] p-4 dark:bg-[#141414]">
      <div className="flex h-full flex-col gap-y-4">
        <div className="text-[#9A45FF] dark:text-[#A953FE]">
          <p className="text-3xl-1 font-semibold">{count}</p>
          <p className="font-medium">{timeLaps}</p>
        </div>
        <div>
          <p className="text-[#F9FBF9] dark:text-[#9E9E9E]">Доходность:</p>
          <p className="text-[#202020] dark:text-white">{percent}% годовых</p>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;
