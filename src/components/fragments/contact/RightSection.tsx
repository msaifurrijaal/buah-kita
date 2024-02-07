const RightSection = () => {
  return (
    <div className="w-full md:w-1/2 px-4 flex md:justify-center">
      <div>
        <h1 className="font-bold text-6xl sm:text-7xl lg:text-8xl">
          Let's <span className="text-primary">get</span>
          <br />
          <span className="text-accent">in</span> touch
        </h1>
        <h1 className="mt-16 text-2xl font-semibold">
          Jangan ragu untuk menyapa kami!
        </h1>

        <div className="mt-16">
          <p className="text-base font-medium text-gray-500">Phone</p>
          <p>+(62) 851-365-379</p>
          <p className="text-base font-medium text-gray-500 mt-8">Email</p>
          <p>buahkita@mail.com</p>
          <p className="text-base font-medium text-gray-500 mt-8">Office</p>
          <p>Jalan Soekarno Hatta, Lowokwaru, Kota Malang</p>
          <p className="underline cursor-pointer">Lihat di google maps</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
