import * as Accordion from "@radix-ui/react-accordion";
import { BsChevronDown } from "react-icons/bs";

const StakeAccordion = () => {
  return (
    <Accordion.Root
      collapsible
      type="single"
      className="mx-auto w-full max-w-[700px] space-y-2"
    >
      <Accordion.Item value="val1" className="group">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <div className="flex items-center justify-between gap-x-6 rounded-xl border-b border-l border-r border-t border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] border-t-[#E0E6E0] bg-[#FAFAFA99] py-5 pl-6 pr-4 hover:cursor-pointer group-data-[state=open]:rounded-b-none group-data-[state=open]:border-b-white dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:border-t-[#202221] dark:bg-[#171717B2] dark:group-data-[state=open]:border-b-[#171717B2]">
              <p className="text-lg leading-[26px] dark:text-white">
                1. Как начать стейкинг криптовалюты?
              </p>
              <div className="shrink">
                <BsChevronDown
                  size={22}
                  className="text-[#0EE78C] transition-transform duration-300 group-data-[state=open]:rotate-180 dark:text-[#16F195]"
                />
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="rounded-b-xl border-b border-l border-r border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] bg-[#FAFAFA99] pb-4 pl-6 pr-3 dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:bg-[#171717B2] dark:text-[#CECFCF]">
          Программу уже проверили более 200 пользователей - подключение всегда
          было стабильным. При возникновении вопросов наши специалисты быстро
          найдут решение.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="val2" className="group">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <div className="flex items-center justify-between gap-x-6 rounded-xl border-b border-l border-r border-t border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] border-t-[#E0E6E0] bg-[#FAFAFA99] py-5 pl-6 pr-4 hover:cursor-pointer group-data-[state=open]:rounded-b-none group-data-[state=open]:border-b-white dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:border-t-[#202221] dark:bg-[#171717B2] dark:group-data-[state=open]:border-b-[#171717B2]">
              <p className="text-lg leading-[26px] dark:text-white">2. Как получить токен?</p>
              <div className="shrink">
                <BsChevronDown
                  size={22}
                  className="text-[#0EE78C] transition-transform duration-300 group-data-[state=open]:rotate-180 dark:text-[#16F195]"
                />
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="rounded-b-xl border-b border-l border-r border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] bg-[#FAFAFA99] pb-4 pl-6 pr-3 dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:bg-[#171717B2] dark:text-[#CECFCF]">
          Программу уже проверили более 200 пользователей - подключение всегда
          было стабильным. При возникновении вопросов наши специалисты быстро
          найдут решение.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="val3" className="group">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <div className="flex items-center justify-between gap-x-6 rounded-xl border-b border-l border-r border-t border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] border-t-[#E0E6E0] bg-[#FAFAFA99] py-5 pl-6 pr-4 hover:cursor-pointer group-data-[state=open]:rounded-b-none group-data-[state=open]:border-b-white dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:border-t-[#202221] dark:bg-[#171717B2] dark:group-data-[state=open]:border-b-[#171717B2]">
              <p className="text-lg leading-[26px] dark:text-white">3. Какие валюты можно стейкать?</p>
              <div className="shrink">
                <BsChevronDown
                  size={22}
                  className="text-[#0EE78C] transition-transform duration-300 group-data-[state=open]:rotate-180 dark:text-[#16F195]"
                />
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="rounded-b-xl border-b border-l border-r border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] bg-[#FAFAFA99] pb-4 pl-6 pr-3 dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:bg-[#171717B2] dark:text-[#CECFCF]">
          Программу уже проверили более 200 пользователей - подключение всегда
          было стабильным. При возникновении вопросов наши специалисты быстро
          найдут решение.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="val4" className="group">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <div className="flex items-center justify-between gap-x-6 rounded-xl border-b border-l border-r border-t border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] border-t-[#E0E6E0] bg-[#FAFAFA99] py-5 pl-6 pr-4 hover:cursor-pointer group-data-[state=open]:rounded-b-none group-data-[state=open]:border-b-white dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:border-t-[#202221] dark:bg-[#171717B2] dark:group-data-[state=open]:border-b-[#171717B2]">
              <p className="text-lg leading-[26px] dark:text-white">4. Что если токен не вырастет в цене?</p>
              <div className="shrink">
                <BsChevronDown
                  size={22}
                  className="text-[#0EE78C] transition-transform duration-300 group-data-[state=open]:rotate-180 dark:text-[#16F195]"
                />
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="rounded-b-xl border-b border-l border-r border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] bg-[#FAFAFA99] pb-4 pl-6 pr-3 dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:bg-[#171717B2] dark:text-[#CECFCF]">
          Программу уже проверили более 200 пользователей - подключение всегда
          было стабильным. При возникновении вопросов наши специалисты быстро
          найдут решение.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="val5" className="group">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <div className="flex items-center justify-between gap-x-6 rounded-xl border-b border-l border-r border-t border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] border-t-[#E0E6E0] bg-[#FAFAFA99] py-5 pl-6 pr-4 hover:cursor-pointer group-data-[state=open]:rounded-b-none group-data-[state=open]:border-b-white dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:border-t-[#202221] dark:bg-[#171717B2] dark:group-data-[state=open]:border-b-[#171717B2]">
              <p className="text-lg leading-[26px] dark:text-white">5. Получится ли вывести накопления раньше срока?</p>
              <div className="shrink">
                <BsChevronDown
                  size={22}
                  className="text-[#0EE78C] transition-transform duration-300 group-data-[state=open]:rotate-180 dark:text-[#16F195]"
                />
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="rounded-b-xl border-b border-l border-r border-b-[#E0E6E0] border-l-[#E0E6E0] border-r-[#E0E6E0] bg-[#FAFAFA99] pb-4 pl-6 pr-3 dark:border-b-[#202221] dark:border-l-[#202221] dark:border-r-[#202221] dark:bg-[#171717B2] dark:text-[#CECFCF]">
          Программу уже проверили более 200 пользователей - подключение всегда
          было стабильным. При возникновении вопросов наши специалисты быстро
          найдут решение.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default StakeAccordion;
