import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fruit } from "../../../types/interfaces/fruit";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import { Link } from "react-router-dom";

type CardProductProps = {
  fruit: Fruit;
  padding: string;
};

const CardProduct = ({ fruit, padding }: CardProductProps) => {
  return (
    <div
      className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${padding}  mb-4 cursor-pointer`}
      key={fruit.id}
    >
      <Link to={`/product/${fruit.id}`}>
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="relative">
            <img
              src={fruit.img}
              alt={fruit.name}
              loading="lazy"
              className="w-full h-60 object-cover"
            />
            <div className="absolute top-0 left-0 px-4 py-2 bg-white rounded-br-lg text-dark flex items-center backdrop:blur-md bg-opacity-80">
              <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              <p className="ms-1">{fruit.rating}</p>
            </div>
          </div>

          <div className="p-4 text-start">
            <h1 className="text-lg font-semibold">{fruit.name}</h1>
            <h1 className="text-xl font-bold text-primaryDark">
              {fruit.discount > 0 ? (
                <span>
                  {rupiahFormatter(fruit.price - fruit.price * fruit.discount)}
                </span>
              ) : (
                <span>{rupiahFormatter(fruit.price)}</span>
              )}
            </h1>

            {fruit.discount > 0 && (
              <div className="flex items-center mt-2">
                <div className="text-xs text-red-700 bg-red-200 py-1 px-2 rounded-md ">
                  {fruit.discount * 100}%
                </div>
                <p className="ms-2 text-sm line-through">
                  {rupiahFormatter(fruit.price)}
                </p>
              </div>
            )}
            <p className="mt-2 text-sm">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="sm"
                  style={{ color: "#e0973a" }}
                />
              </span>{" "}
              {fruit.place}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
