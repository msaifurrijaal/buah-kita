import FreeOngkirCard from "../../elements/history/FreeOngkirCard";
import BukakitaPay from "../../elements/payment/BukakitaPay";

const LayananSection = () => {
  return (
    <div className="hidden lg:block lg:w-1/3 pe-4">
      <div className="w-full rounded-lg shadow-lg p-4 border">
        <h1 className="text-xl font-semibold">Layanan</h1>
        <FreeOngkirCard />
        <div className="flex items-center justify-between mt-4">
          <BukakitaPay />
          <p className="text-sm text-primary">Aktifkan</p>
        </div>
        <h1 className="text-base font-semibold mt-4">Profil Saya</h1>
        <p className="text-sm mt-2">Wishlist</p>
        <p className="text-sm mt-2">Toko Favorit</p>
        <p className="text-sm mt-2">Pengaturan</p>
      </div>
    </div>
  );
};

export default LayananSection;
