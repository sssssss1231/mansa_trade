const Card = ({ title }: { title: string }) => {
  return (
    <div className="h-card w-card-sm rounded-lg bg-[#F9FBF9] xl:w-card-lg dark:bg-[#141414]">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="grid h-[124px] w-[255px] place-items-center rounded-lg bg-gray-400/20">
          img
        </div>
        <div className="flex grow items-center justify-center px-5 text-center font-medium text-[#2F4B3E] dark:text-[#D8FDEB]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
