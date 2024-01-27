type CardWorkProps = {
  image: string;
  title: string;
  description: string;
};

const CardWork = ({ image, title, description }: CardWorkProps) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-6 mb-4">
      <div className="flex justify-center">
        <img src={image} className="max-w-44" />
      </div>
      <h1 className="text-2xl font-semibold mt-4 px-4">{title}</h1>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default CardWork;
