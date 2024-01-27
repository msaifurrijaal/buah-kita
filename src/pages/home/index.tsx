import Hero from "../../components/fragments/Hero";
import MainLayout from "../../components/partials/layout/MainLayout";
import CardWork from "../../components/elements/home/CardWork";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="pt-24 sm:pt-28 md:pt-0 pb-28">
        <div>
          <Hero />
        </div>
        <div className="container px-6 py-6 md:py-0 md:pb-6 text-center">
          <h1 className="text-4xl font-bold">Pilih buah-buahan terbaikmu!</h1>
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
        <div className="bg-slate-50 mt-6">
          <div className="container py-10 text-center">
            <h1 className="text-4xl font-bold">Produk Terbaik!</h1>
            <p className="text-base mt-4">
              Nikmati kelezatan terbaik dari buah-buahan pilihan kami, segar dan
              menyehatkan.<br />Setiap gigitan adalah perpaduan sempurna cita rasa
              dan nutrisi terbaik alam.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
