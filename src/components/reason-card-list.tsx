import ReasonCard from "./reason-card.tsx";
import {
  BsCoin,
  BsPhone,
  BsShieldCheck,
  BsGem,
  BsBox,
  BsChat,
} from "react-icons/bs";

const ReasonCardList = () => {
  return (
    <div className="grid grid-cols-rsn-card-1 place-content-center gap-4 md:grid-cols-rsn-card-2">
      <ReasonCard
        icon={<BsCoin size={20} className="text-[#46C3EA]" />}
        className="bg-[#46C3EA26]"
        title="Высокая доходность"
        description="Процентная ставка составляет от 3% до 8% годовых — начните стейкать и получайте повышенный пассивный доход."
      />
      <ReasonCard
        icon={<BsPhone size={20} className="text-[#DCC24B]" />}
        className="bg-[#DCC24B26]"
        title="Мобильное приложение"
        description="Проводите транзакции, управляйте активами прямо со смартфона. Подключите криптокошелек и отслеживайте операции с помощью системы уведомлений"
      />
      <ReasonCard
        icon={<BsShieldCheck size={20} className="text-[#46C3EA]" />}
        className="bg-[#7E5EFF26]"
        title="Безопасность"
        description="Только владелец токенов имеет право на их возврат, что исключает возможность несанкционированного доступа и обеспечивает безопасное управление цифровыми активами."
      />
      <ReasonCard
        icon={<BsGem size={20} className="text-green-900" />}
        className="bg-[#3ED182]"
        title="Множество бонусов"
        description="Возможность участия в развитии платформы Mansa Trade, скидки и акции для владельцев токенов, быстрый и безопасный вывод средств на карту или кошелек."
      />
      <ReasonCard
        icon={<BsBox size={20} className="text-[#46C3EA]" />}
        className="bg-[#DB5394]"
        title="5 сетей блокчейна"
        description="Платформа Mansa Trade поддерживает операции в сетях Solana, Ethereum, Polygon, Binance Smart Chain (BNB), Avalanche"
      />
      <ReasonCard
        icon={<BsChat size={20} className="text-[#46C3EA]" />}
        className="bg-[#F67C38]"
        title="Поддержка 24/7"
        description="Наши специалисты всегда на связи и готовы провести бесплатную консультацию, ответить на любые вопросы"
      />
    </div>
  );
};

export default ReasonCardList;
