const Calculator = () => {
  return (
    <div className="mx-auto w-full max-w-screen-lg rounded-[1.75rem] bg-[#F9FBF9] dark:bg-[#141414]">
      <div className="flex w-full flex-col items-center justify-center gap-y-12 px-4 py-10 text-center lg:px-10">
        <p className="text-2xl-1 font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-white">
          Рассчитайте будущую прибыль
        </p>

        <div className="flex w-full flex-col gap-y-5 md:flex-row md:gap-x-4">
          <div className="flex w-full items-center">
            <div className="flex w-full flex-col space-y-1">
              <label
                htmlFor="tokens"
                className="self-start pl-0.5 text-[9px] font-semibold uppercase leading-3 text-[#202020] dark:text-white"
              >
                Количество токенов MNS
              </label>
              <input
                id="tokens"
                type="text"
                className="w-full rounded-l-xl border-r-2 bg-white px-4 py-5 text-lg text-[#202020] outline-none dark:border-r-[#141414] dark:bg-[#26282C] dark:text-white"
              />
            </div>
            <div className="flex w-full flex-col space-y-1">
              <label
                htmlFor="stakeTime"
                className="self-start pl-0.5 text-[9px] font-semibold uppercase leading-3 text-[#202020] dark:text-white"
              >
                Срок стейкинга
              </label>
              <input
                type="text"
                className="w-full rounded-r-xl bg-white px-4 py-5 text-lg text-[#202020] outline-none dark:bg-[#26282C] dark:text-white"
              />
            </div>
          </div>
          <div className="w-full space-y-1 text-start lg:w-3/4">
            <p className="pl-0.5 text-[9px] font-semibold uppercase leading-3 text-[#202020] dark:text-white">
              Результат
            </p>
            <div className="rounded-xl bg-[#9A45FF] px-4 py-3 text-start text-[28px] font-medium leading-[33.89px] text-[#202020] dark:bg-[#A953FE] dark:text-white">
              132 MNS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
