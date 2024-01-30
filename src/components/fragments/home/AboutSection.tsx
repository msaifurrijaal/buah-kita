const AboutSection = () => {
    return(
        <div className="container py-12 md:py-20 px-4 md:px-8 lg:px-12 flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <div className="rounded-3xl w-3/5 overflow-hidden">
              <img src="/images/home/bg-about.jpg" alt="Ilustrasi Buah Segar" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-6 sm:mt-0 text-center sm:text-start">
            <p className="text-accent text-xl font-medium">- Kami Adalah -</p>
            <h1 className="text-4xl font-bold mt-2 md:mt-4">
              Menyelamatkan Buah-Buahan Berkualitas dari Food Waste
            </h1>
            <div className="flex items-center justify-center sm:justify-start mt-4 md:mt-6">
              <img
                src="/images/home/founder.jpg"
                alt="Founder Buahkita"
                className="max-w-12 rounded-full"
              />
              <div className="ms-2">
                <h3 className="text-lg font-semibold">Erick Smith</h3>
                <p className="text-sm text-gray-500">Founder</p>
              </div>
            </div>
            <p className="mt-4 md:mt-6 text-lg">
              "Platform penjualan buah ini adalah sebuah inisiatif yang
              bertujuan untuk mengurangi pemborosan makanan atau food waste
              dengan memanfaatkan sisa buah-buahan yang masih layak konsumsi
              dari rumah tangga, industri makanan, restoran, dan berbagai sumber
              lainnya."
            </p>
          </div>
        </div>
    )
}

export default AboutSection;