const CartUlasan = () => {
  return (
    <div className="flex items-center rounded-lg shadow-lg py-12 px-6 mt-2 justify-center">
      <div className="w-1/5">
        <img src="/images/logo.png" alt="Logo Buahkita" />
      </div>
      <div className="w-3/5">
        <h1 className="text-xl md:text-3xl font-semibold ps-4">
          Belum ada ulasan untuk produk ini
        </h1>
        <p className="text-base text-gray-500 ps-4 mt-2">
          Beli produk ini dan jadilah yang pertama memberikan ulasan
        </p>
      </div>
    </div>
  );
};

export default CartUlasan;
