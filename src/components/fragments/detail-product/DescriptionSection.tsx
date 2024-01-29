import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fruit } from "../../../types/interfaces/fruit";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";
import ListDetail from "../../elements/detail-product/ListDetail";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type DesctiptionSectionProps = {
  isLoading: boolean;
  fruit: Fruit | undefined;
};

const DesctiptionSection = ({ isLoading, fruit }: DesctiptionSectionProps) => {
  return (
    <div className="w-full mt-6 sm:mt-0 sm:w-3/5 lg:w-6/12 px-4">
      {fruit && !isLoading && (
        <div>
          <div className="flex">
            <p className="text-base font-semibold text-gray-500">
              {fruit.category.name}
            </p>
            <p className="text-base font-semibold text-gray-500 mx-1">/</p>
            <p className="text-base font-semibold text-gray-500">
              {fruit.condition}
            </p>
          </div>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
            {fruit.name}
          </h1>
          <div className="flex items-center mt-4">
            <p className="text-lg font-semibold text-accent md:text-2xl">
              {fruit.discount > 0 ? (
                <span>
                  {rupiahFormatter(fruit.price - fruit.price * fruit.discount)}
                </span>
              ) : (
                <span>{rupiahFormatter(fruit.price)}</span>
              )}
            </p>
            {fruit.discount > 0 && (
              <div className="flex items-center">
                <p className="mx-2  md:mx-4">-</p>
                <div className="text-xs text-red-700 bg-red-200 py-1 px-2 rounded-md ">
                  {fruit.discount}%
                </div>
                <p className="ms-2 text-sm line-through">
                  {rupiahFormatter(fruit.price)}
                </p>
              </div>
            )}
          </div>

          <p className="text-base mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            voluptatibus odio iusto deserunt nam sequi nihil. Velit itaque
            exercitationem ad.
          </p>
          <hr className="mt-4" />
          <div className="py-2 md:py-4">
            <ListDetail title="Rating">
              <FontAwesomeIcon
                icon={faStar}
                size="sm"
                style={{ color: "#c97b48" }}
              />
              <p className="text-base ms-1">{fruit.rating && fruit.rating}</p>
            </ListDetail>
            <ListDetail title="Stok">
              <p className="text-base ms-1">{fruit.stock}</p>
            </ListDetail>
            <ListDetail title="Lokasi">
              <p className="text-base ms-1">{fruit.place}</p>
            </ListDetail>
            <ListDetail title="Terjual">
              <p className="text-base ms-1">{fruit.sold}</p>
            </ListDetail>
            <ListDetail title="Berat">
              <p className="text-base ms-1">{fruit.weight} Kg</p>
            </ListDetail>
          </div>
          <hr />
        </div>
      )}
      {isLoading && (
        <div>
          <Skeleton height="50px" className="mb-1" width="100%" />
          <Skeleton height="25px" className="mb-1" width="20%" />
          <Skeleton height="50px" className="mb-1" width="20%" />
          <Skeleton height="150px" className="mb-1" width="100%" />
          <Skeleton height="50px" className="mb-1" width="20%" />
          <Skeleton height="50px" className="mb-1" width="40%" />
        </div>
      )}
    </div>
  );
};

export default DesctiptionSection;
