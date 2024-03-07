const AboutSection = () => {
  return (
    <div className="grid min-h-[calc(100dvh+100px)] place-items-center">
      <div className="flex w-full items-center justify-between">
        <div className="mx-auto max-w-[665px] space-y-7 px-4 lg:mx-0 xl:px-0">
          <p className="text-2xl-1 font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-white">
            MansaTrade — надежный токен с высоким уровнем доходности
          </p>
          <div className="text-[#4C4E4D] dark:text-[#CECFCF]">
            <p>
              Участвуйте в управлении сетью Mansa Trade — храните уникальную
              цифровую валюту MNS и зарабатывайте от 3% до 8% годовых. Владельцы
              токенов получают дополнительные привилегии:
            </p>
            <ul className="list-disc p-4">
              <li>Доступ к NFT и другим активам платформы.</li>
              <li>Возможность влиять на развитие блокчейн-сети.</li>
              <li>Скидки и оплата комиссии токенами.</li>
              <li>Доступ к эксклюзивным опциям Mansa Trade.</li>
            </ul>
            <p>
              Стейкинг токенов MansaTrade помогает поддерживать работу блокчейна
              и развивать проект, увеличивая итоговую стоимость монет. Всего
              выпущено 25 000 000 монет — в ближайшие года планируется увеличить
              их стоимость.
            </p>
          </div>
        </div>
        <div className="hidden size-[542px] grow place-items-center rounded-lg bg-gray-700 text-3xl text-white lg:grid">
          image
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
