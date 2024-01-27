const Footer = () => {
  return (
    <footer className={`bg-slate-50 pt-14`}>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full px-4 font-medium md:w-1/3">
            <img
              src="/images/logo.png"
              alt="Logo buahkita"
              className="max-w-40 -ml-2"
            />
            <h3 className="mt-2 mb-1 text-xl font-semibold text-dark">
              Kontak Kami
            </h3>
            <p>buahkita@gmail.com</p>
            <p>Malang, Indonesia</p>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-dark">
              Tautan Bantuan
            </h3>
            <ul className="text-dark">
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Pelacakan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Status Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Pengiriman
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 w-full px-4 md:w-1/3">
            <h3 className="mb-5 text-xl font-semibold text-dark">
              Tautan Berguna
            </h3>
            <ul className="text-dark">
              <li>
                <a
                  href="#home"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Penawaran Spesial
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Kartu Hadiah
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Periklanan
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="mb-3 inline-block text-base hover:text-accent"
                >
                  Jangka Waktu Penggunaan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
