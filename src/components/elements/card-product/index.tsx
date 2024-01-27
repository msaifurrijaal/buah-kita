import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fruit } from "../../../types/interfaces/fruit";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";

const CardProduct = (props: Fruit) => {
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 mb-4 cursor-pointer"
      key={props.id}
    >
      <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="relative">
          <img
            src={props.img}
            alt={props.name}
            className="w-full h-60 object-cover"
          />
          <div className="absolute top-0 left-0 px-4 py-2 bg-white rounded-br-lg text-dark flex items-center backdrop:blur-md bg-opacity-80">
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
            <p className="ms-1">{props.rating}</p>
          </div>
        </div>

        <div className="p-4 text-start">
          <h1 className="text-lg font-semibold">{props.name}</h1>
          <h1 className="text-xl font-bold text-primaryDark">
            {props.discount > 0 ? (
              <span>
                {rupiahFormatter(props.price - props.price * props.discount)}
              </span>
            ) : (
              " "
            )}
          </h1>
          <div className="flex items-center mt-2">
            <div className="text-xs bg-red-200 py-1 px-2 rounded-md ">
              {props.discount} %
            </div>
            <p className="ms-2 text-sm line-through">
              {rupiahFormatter(props.price)}
            </p>
          </div>
          <p className="mt-2 text-sm">
            <span>
              <FontAwesomeIcon
                icon={faLocationDot}
                size="sm"
                style={{ color: "#000000" }}
              />
            </span>{" "}
            {props.place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
