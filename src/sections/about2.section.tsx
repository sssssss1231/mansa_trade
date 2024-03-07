const About2Section = () => {
  return (
    <div className="grid min-h-[calc(100dvh+400px)] place-items-center lg:min-h-[calc(100dvh+100px)]">
      <div className="flex w-full items-center justify-between gap-x-7">
        <div className="mx-auto max-w-[665px] space-y-7 px-4 lg:mx-0 xl:px-0">
          <p className="text-2xl-1 font-semibold leading-9 text-[#202020] lg:text-4xl-1 dark:text-dark-white">
            Mansa Trade — зарабатывайте на криптовалюте без ограничений
          </p>
          <div className="text-[#202020] dark:text-[#CECFCF]">
            <p>
              Создали систему, отвечающую всем потребностям владельцев
              криптовалюты — храните токены, торгуйте активами безопасно и с
              максимальной выгодой. Платформа полностью децентрализована и
              работает в популярных блокчейн-сетях, что обеспечивает большую
              популяризацию внутренних монет.
            </p>
            <ul className="list-disc p-4">
              <li>Для начала торговли достаточно подключить кошелек.</li>
              <li>
                10+ операций с валютой — вывод, купля-продажа, перевод, обмен на
                наличные и т.д.
              </li>
              <li>Более 1 000 транзакций проводится ежедневно.</li>
              <li>100+ пользователей хранят токены MansaTrade.</li>
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

export default About2Section;
