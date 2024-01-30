import CardWork from "../../elements/home/CardWork";

const RulesSection = () => {
  return (
    <div className="container px-6 py-6 md:py-0 md:pb-6 text-center">
      <h1 className="text-4xl font-bold">Pilih buah-buahan terbaikmu</h1>
      <div className="mt-12 lg:mt-14 flex flex-wrap justify-center">
        <CardWork
          image="/images/home/choose-order.png"
          title="Pilih Buah-buahan"
          description="Periksa lebih dari ratusan macam buah untuk memilih buah favorit
            Anda"
        />
        <CardWork
          image="/images/home/pay-order.png"
          title="Bayar di muka"
          description="Ini cepat, aman, dan sederhana. Pilih beberapa metode pembayaran"
        />
        <CardWork
          image="/images/home/enjoy-order.png"
          title="Nikmati buah yang telah diterima"
          description="Buah dipilih dan langsung diantar ke lokasimu"
        />
      </div>
    </div>
  );
};

export default RulesSection;
