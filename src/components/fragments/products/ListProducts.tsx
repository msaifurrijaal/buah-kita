import Skeleton from "react-loading-skeleton";
import { Fruit } from "../../../types/interfaces/fruit";
import CardProduct from "../../elements/card-product";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

type ListProductProps = {
  products: Fruit[];
  isLoading: boolean;
};
const ListProducts = ({ products, isLoading }: ListProductProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 8;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (n: number) => {
    setCurrentPage(n);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="mt-6 flex flex-wrap justify-start">
        {products &&
          products.length > 0 &&
          records.map((item) => (
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
      {products && products.length > 0 && (
        <div className="flex justify-center mt-2">
          <div className="flex">
            <button
              className="py-1 px-2 border rounded-l-md hover:bg-slate-200"
              onClick={prevPage}
            >
              Prev
            </button>
            {numbers.map((number, index) => (
              <button
                className={`py-1 px-4 border-y ${
                  currentPage === number
                    ? "bg-primary hover:bg-green-700 text-white"
                    : "hover:bg-slate-200"
                }`}
                key={index}
                onClick={() => changeCurrentPage(number)}
              >
                {number}
              </button>
            ))}
            <button
              className="py-1 px-2 border rounded-r-md hover:bg-slate-200"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListProducts;
