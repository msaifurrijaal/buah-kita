const PartnerSection = () => {
  return (
    <div className="container py-12 text-center">
      <p className="font-semibold text-xl text-accent">Partner & Clients</p>
      <h1 className="font-bold text-4xl mt-2">
        Kami Bekerja Dengan Klien Terbaik
      </h1>
      <div className="flex flex-wrap items-center justify-center py-4 md:py-12">
        <div className="w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center">
          <img src="/images/home/client1.png" alt="" />
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center">
          <img src="/images/home/client2.png" alt="" />
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center">
          <img src="/images/home/client3.png" alt="" />
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center">
          <img src="/images/home/client4.png" alt="" />
        </div>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 flex justify-center items-center">
          <img src="/images/home/client5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
