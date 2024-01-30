import { useEffect, useState } from "react";
import MainLayout from "../../components/partials/layout/MainLayout";
import { Fruit } from "../../types/interfaces/fruit";
import getBuah from "../../services/data/getBuah";
import SideBar from "../../components/fragments/products/SideBar";
import ListProducts from "../../components/fragments/products/ListProducts";
import Dropdown from "../../components/elements/dropdown";
import { Location } from "../../types/interfaces/location";
import SearchProducts from "../../components/elements/search/SearchProducts";

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
  const [textInput, setTextInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    console.log(textInput);
  }, [textInput]);

  useEffect(() => {
    setTextInput("");
    let filteredProducts: Fruit[] = [];
    if (filterLoc === "Semua") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((fruit) => fruit.place === filterLoc);
    }
    setProductsFilter(filteredProducts);
  }, [filterLoc]);

  useEffect(() => {
    let filteredProducts: Fruit[] = [];
    if (filterLoc === "Semua" || filterLoc === "") {
      filteredProducts = products.filter((fruit) =>
        fruit.name.toLowerCase().includes(textInput.toLowerCase())
      );
    } else {
      filteredProducts = products
        .filter((fruit) => fruit.place === filterLoc)
        .filter((fruit) =>
          fruit.name.toLowerCase().includes(textInput.toLowerCase())
        );
    }
    setProductsFilter(filteredProducts);
  }, [textInput]);

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
              <SearchProducts value={textInput} setTextInput={setTextInput} />
              <ListProducts isLoading={isLoading} products={productsFilter} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
