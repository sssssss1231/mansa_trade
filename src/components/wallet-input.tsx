const WalletInput = () => {
  return (
    <div className="px-4 xl:px-0">
      <div className="mx-auto max-w-[540px] rounded-[31px] border border-[#E9E9E9] bg-white dark:border-[#2D2E2E] dark:bg-[#26282C]">
        <div className="flex flex-col items-center gap-y-2 p-1 md:flex-row md:justify-between">
          <div className="p-4">
            <input
              type="number"
              className="w-full bg-inherit px-2 text-center placeholder-[#4C4E4D] outline-none md:text-start"
              placeholder="Введите сумму стейкинга"
            />
          </div>
          <button className="w-full grow rounded-full bg-green-400 p-4 md:max-w-[218px] dark:text-[#131212]">
            Подключить кошелек
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletInput;
