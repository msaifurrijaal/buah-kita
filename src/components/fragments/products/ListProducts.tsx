import Skeleton from "react-loading-skeleton";
import { Fruit } from "../../../types/interfaces/fruit";
import CardProduct from "../../elements/card-product";
import "react-loading-skeleton/dist/skeleton.css";

type ListProductProps = {
  products: Fruit[];
  isLoading: boolean;
};
const ListProducts = ({ products, isLoading }: ListProductProps) => {
  return (
    <div className="mt-6 flex flex-wrap justify-start">
      {products &&
        products.length > 0 &&
        products.map((item) => (
          <CardProduct fruit={item} padding="px-2" key={item.id} />
        ))}
      {!isLoading && products && products.length < 1 && (
        <div className="flex flex-col py-12 justify-center items-center w-full">
          <img
            src="/images/products/empty-stroll.png"
            alt="Keranjang kosong"
            className="max-w-28"
          />
          <p className="text-base lg:text-xl mt-4">
            Maaf, produk yang anda cari tidak tersedia
          </p>
        </div>
      )}
      {isLoading &&
        [...Array(8)].map((_, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 rounded-2xl overflow-hidden"
            key={index}
          >
            <Skeleton height="220px" />
            <Skeleton height="30px" className="mt-2" />
            <Skeleton height="20px" className="mt-2" />
            <Skeleton height="10px" className="mt-2" />
            <Skeleton height="20px" className="mt-1" />
          </div>
        ))}
    </div>
  );
};

export default ListProducts;
