import Card from "../components/card.tsx";

const CardsSection = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-4 px-2 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card title="Всего 25 000 000 монет" />
      <Card title="Скидки и бонусы  для владельцев токенов" />
      <Card title="Доступ к новым функциям платформы" />
      <Card title="Полный контроль над активами" />
    </div>
  );
};

export default CardsSection;
