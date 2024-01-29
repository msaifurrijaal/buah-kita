const WarningCart = () => {
  return (
    <div className="rounded-lg border bg-white p-6 flex justify-center items-center">
      <div className="w-1/5 flex justify-end pe-4">
        <img src="/images/payment/checkout.png" className="w-full sm:w-3/5" />
      </div>
      <div className="w-4/5">
        <p className="text-base text-gray-500">
          Ini halaman terakhir dari proses belanjamu. Pastikan semua sudah
          benar, ya. 😊
        </p>
      </div>
    </div>
  );
};

export default WarningCart;
