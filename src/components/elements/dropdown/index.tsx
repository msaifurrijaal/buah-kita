import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Location } from "../../../types/interfaces/location";
import { Link } from "react-router-dom";

type DropdownProps = {
  setFilterLoc: React.Dispatch<React.SetStateAction<string>>;
  locations: Location[];
};

const Dropdown = ({ locations, setFilterLoc }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const setFilter = (loc: string) => {
    setIsOpen((prev) => !prev);
    setFilterLoc(loc);
  };

  return (
    <div className="relative flex flex-col items-center w-full rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white p-4 w-full flex items-center justify-between 
            font-semibold text-lg rounded-lg tracking-wider border border-gray-300 
            active:border-white transition duration-300 active:text-white"
      >
        Filter berdasarkan lokasi
        {!isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} />
        )}
      </button>
      {isOpen && (
        <div
          className="bg-white border border-gray-300 absolute top-16 flex flex-col items-start 
              rounded-lg w-full overflow-hidden py-2 z-10"
        >
          {locations.map((item) => {
            return (
              <Link
                to=""
                onClick={() => setFilter(item.city)}
                key={item.city}
                className="cursor-pointer hover:bg-slate-100 w-full p-2"
              >
                <h3>{item.city}</h3>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
