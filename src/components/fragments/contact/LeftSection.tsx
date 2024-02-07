import Button from "../../elements/button";
import Input from "../../elements/input/Input";

const LeftSection = () => {
  return (
    <div className="w-full md:w-1/2">
      <p className="mt-8 md:mt-6 px-4 md:px-0 font-medium">
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
  );
};

export default LeftSection;
