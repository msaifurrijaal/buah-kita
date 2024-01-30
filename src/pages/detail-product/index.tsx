import { useParams } from "react-router-dom";
import MainLayout from "../../components/partials/layout/MainLayout";
import { useEffect, useState } from "react";
import getDetailBuah from "../../services/data/getDetailBuah";
import { Fruit } from "../../types/interfaces/fruit";
import ImageSection from "../../components/fragments/detail-product/ImageSection";
import DesctiptionSection from "../../components/fragments/detail-product/DescriptionSection";
import CartSection from "../../components/fragments/detail-product/CartSection";
import CartUlasan from "../../components/elements/detail-product/CartUlasan";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCartDispatch } from "../../context/CartContext";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Fruit>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useCartDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getDetailBuah(id?.toString()!);
        setIsLoading(false);
        if (result.success) {
          setProduct(result.data.data);
        } else {
          alert(`Error : ${result.data}`);
        }
      } catch (error) {
        alert(`Error : ${error}`);
      }
    };

    fetchData();
  }, []);

  const addToCart = (productId: number, qty: number) => {
    if (dispatch != null) {
      dispatch({ type: "ADD_TO_CART", payload: { id: productId, qty } });
    }
  };

  return (
    <MainLayout>
      <div className="py-16 md:py-20 min-h-screen">
        <div className="container flex flex-wrap pt-6">
          <ImageSection isLoading={isLoading} image={product?.img} />
          <DesctiptionSection isLoading={isLoading} fruit={product} />
          <CartSection
            isLoading={isLoading}
            fruit={product}
            addToCart={addToCart}
          />
          <div className="w-full lg:w-9/12 mt-4 px-4 lg:px-2">
            {!isLoading ? (
              <div>
                <h1 className="text-base md:text-xl font-semibold">
                  Ulasan Pembeli
                </h1>
                <CartUlasan />
              </div>
            ) : (
              <div>
                <Skeleton height="20px" width="15%" className="mt-2" />
                <Skeleton height="150px" className="mt-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailProductPage;
