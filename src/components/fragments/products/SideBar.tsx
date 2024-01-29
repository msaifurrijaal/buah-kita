import { Location } from "../../../types/interfaces/location";

type SideBarProps = {
  setFilterLoc: React.Dispatch<React.SetStateAction<string>>;
  locations: Location[];
};

const SideBar = ({ setFilterLoc, locations }: SideBarProps) => {
  return (
    <div className="hidden md:block w-full md:w-1/4 px-4">
      <div className="w-full rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold">Filter berdasarkan lokasi</h3>
        <form action="" className="mt-4">
          {locations.map((location) => {
            return (
              <div key={location.city}>
                <input
                  type="radio"
                  id={location.city}
                  name="place"
                  value={location.city}
                  className="mb-3"
                  onChange={(e) => setFilterLoc(e.target.value)}
                />
                <label htmlFor={location.city} className="ms-2">
                  {location.city}
                </label>
                <br />
              </div>
            );
          })}
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
