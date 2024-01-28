type SideBarProps = {
  setFilterLoc: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = ({ setFilterLoc }: SideBarProps) => {
  return (
    <div className="w-full md:w-1/4 px-4">
      <div className="w-full rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">Filter berdasarkan lokasi</h3>
        <form action="" className="mt-4">
          <input
            type="radio"
            id="all"
            name="place"
            value="Semua"
            className="mb-3"
            onChange={(e) => setFilterLoc(e.target.value)}
          />
          <label htmlFor="batu" className="ms-2">
            Semua
          </label>
          <br />
          <input
            type="radio"
            id="batu"
            name="place"
            value="Kota Batu"
            className="mb-3"
            onChange={(e) => setFilterLoc(e.target.value)}
          />
          <label htmlFor="batu" className="ms-2">
            Batu
          </label>
          <br />
          <input
            type="radio"
            id="bojonegoro"
            name="place"
            value="Kabupaten Bojonegoro"
            className="mb-3"
            onChange={(e) => setFilterLoc(e.target.value)}
          />
          <label htmlFor="bojonegoro" className="ms-2">
            Bojonegoro
          </label>
          <br />
          <input
            type="radio"
            id="boyolali"
            name="place"
            value="Kota Boyolali"
            className="mb-3"
            onChange={(e) => setFilterLoc(e.target.value)}
          />
          <label htmlFor="boyolali" className="ms-2">
            Boyolali
          </label>
          <br />
          <input
            type="radio"
            id="kediri"
            name="place"
            value="Kota Kediri"
            className="mb-3"
            onChange={(e) => setFilterLoc(e.target.value)}
          />
          <label htmlFor="kediri" className="ms-2">
            Kediri
          </label>
          <br />
          <input
            type="radio"
            id="malang"
            name="place"
            value="Kota Malang"
            className="mb-3"
            onChange={(e) => setFilterLoc(e.target.value)}
          />
          <label htmlFor="malang" className="ms-2">
            Malang
          </label>
        </form>
      </div>
      <img
        src="/images/products/campaign.png"
        alt="Poster Kampanye Food Waste"
        className="rounded-lg shadow-xl mt-4 cursor-pointer hidden md:block"
      />
    </div>
  );
};

export default SideBar;
