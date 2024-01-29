import { useEffect, useRef, useState } from "react";
import MainLayout from "../../components/partials/layout/MainLayout";
import { Fruit } from "../../types/interfaces/fruit";
import getBuah from "../../services/data/getBuah";
import SideBar from "../../components/fragments/products/SideBar";
import ListProducts from "../../components/fragments/products/ListProducts";
import Dropdown from "../../components/elements/dropdown";
import { Location } from "../../types/interfaces/location";

const locationProducts: Location[] = [
  {
    city: "Semua",
  },
  {
    city: "Kota Batu",
  },
  {
    city: "Kabupaten Bojonegoro",
  },
  {
    city: "Kota Boyolali",
  },
  {
    city: "Kota Kediri",
  },
  {
    city: "Kota Malang",
  },
];

const ProductPage = () => {
  const [products, setProducts] = useState<Fruit[]>([]);
  const [productsFilter, setProductsFilter] = useState<Fruit[]>(products);
  const [filterLoc, setFilterLoc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getBuah();
        setIsLoading(false);
        if (result.success) {
          setProducts(result.data.data.data);
        } else {
          alert(`Error : ${result.data}`);
        }
      } catch (error) {
        alert(`Error : ${error}`);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setProductsFilter(products);
  }, [products]);

  useEffect(() => {
    searchref.current?.setAttribute("value", "");
    let filteredProducts: Fruit[] = [];
    if (filterLoc === "Semua") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((fruit) => fruit.place === filterLoc);
    }
    setProductsFilter(filteredProducts);
  }, [filterLoc]);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   let filteredProducts = productsFilter.filter((fruit) =>
  //     fruit.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setProductsFilter(filteredProducts);
  //   console.log(value);
  // };

  return (
    <MainLayout>
      <div className="py-16 md:py-20 min-h-screen">
        <div className="container flex flex-wrap pt-6">
          <SideBar setFilterLoc={setFilterLoc} locations={locationProducts} />
          <div className="w-full md:w-3/4 px-4 mt-4 md:mt-0">
            <div className="w-full">
              <div className="block md:hidden mb-4">
                <Dropdown
                  locations={locationProducts}
                  setFilterLoc={setFilterLoc}
                />
              </div>
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm border border-gray-300 bg-gray-50 focus:ring-primary focus:border-primary"
                    placeholder="Cari buah-buahan..."
                    // onChange={handleInputChange}
                    ref={searchref}
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                  >
                    Cari
                  </button>
                </div>
              </form>
              <ListProducts isLoading={isLoading} products={productsFilter} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
