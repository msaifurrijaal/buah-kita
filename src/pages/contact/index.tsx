import MainLayout from "../../components/partials/layout/MainLayout";
import Input from "../../components/elements/input/Input";
import Button from "../../components/elements/button";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="py-16 md:py-20 min-h-screen">
        <div className="container flex flex-wrap pt-6">
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
                <p className="text-base font-medium text-gray-500 mt-8">
                  Email
                </p>
                <p>buahkita@mail.com</p>
                <p className="text-base font-medium text-gray-500 mt-8">
                  Office
                </p>
                <p>Jalan Soekarno Hatta, Lowokwaru, Kota Malang</p>
                <p className="underline cursor-pointer">Lihat di google maps</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="mt-8 md:mt-6 px-4 md:px-0">
              Great! Kami sangat senang mendengar pendapat Anda
              <br />
              dan mari kita mulai sesuatu yang istimewa bersama-sama.
              <br />
              Hubungi kami untuk pertanyaan apa pun.
            </p>
            <div className="bg-black p-4 mt-8 md:mt-16">
              <p className="text-white text-lg font-medium">Kontak</p>
              <div className="mt-4">
                <p className="text-base text-white">Nama</p>
                <Input
                  name="name"
                  onInputChange={() => {}}
                  type="text"
                  placeholder="Silahkan masukkan nama anda"
                />
              </div>
              <div className="mt-4">
                <p className="text-base text-white">Email</p>
                <Input
                  name="email"
                  onInputChange={() => {}}
                  type="email"
                  placeholder="Silahkan masukkan email anda"
                />
              </div>
              <div className="mt-4">
                <p className="text-base text-white">
                  Beritahu kami tentang minat Anda
                </p>
                <Input
                  name="message"
                  onInputChange={() => {}}
                  type="text"
                  placeholder="Silahkan masukkan pesan anda"
                />
              </div>
              <Button classname="bg-accent mt-8">KIRIM</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
