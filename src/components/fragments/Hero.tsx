import Button from "../elements/button";

const Hero = () => {
  return (
    <div className="container px-8 min-h-screen flex flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <p className="py-2 px-4 bg-green-100 inline-block text-primary rounded-xl">Buah segar dan menyehatkan 🍉</p>
        <h1 className="text-4xl lg:text-6xl font-bold mt-4">
          Buah-buahan yang <span className="text-primary">Anda Suka </span>
          Dikirimkan kepada Anda
        </h1>
        <p className="text-base font-semibold mt-6 lg:mt-10">
          Selamatkan Buah, Harganya Terjangkau! Beli Buah Segar Berkualitas,
          Kurangi Food Waste. Sehatkan Diri, Lindungi Lingkungan!
        </p>
        <div className="flex mt-6 lg:mt-10">
          <Button
            classname="me-1 bg-primary text-white font-semibold rounded-md 
          hover:bg-white hover:text-primary hover:border hover:border-primary"
          >
            Mulai
          </Button>
          <Button
            classname="ms-1 hover:bg-primary hover:text-white font-semibold rounded-md 
          bg-white text-primary border border-primary"
          >
            Explore Menu
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/images/home/fruit-bg.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
