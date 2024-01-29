import { useParams } from "react-router-dom";
import MainLayout from "../../components/partials/layout/MainLayout";
import { useEffect, useState } from "react";
import getDetailBuah from "../../services/data/getDetailBuah";
import { Fruit } from "../../types/interfaces/fruit";
import ImageSection from "../../components/fragments/detail-product/ImageSection";
import DesctiptionSection from "../../components/fragments/detail-product/DescriptionSection";
import CartSection from "../../components/fragments/detail-product/CartSection";
import CartUlasan from "../../components/elements/detail-product/CartUlasan";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Fruit>();
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <MainLayout>
      <div className="py-16 md:py-20 min-h-screen">
        <div className="container flex flex-wrap pt-6">
          <ImageSection isLoading={isLoading} image={product?.img} />
          <DesctiptionSection isLoading={isLoading} fruit={product} />
          <CartSection isLoading={isLoading} fruit={product} />
          <div className="w-full lg:w-9/12 mt-4 px-4 lg:px-2">
            <h1 className="text-base md:text-xl font-semibold">
              Ulasan Pembeli
            </h1>
            <CartUlasan />
          </div>
          
        </div>
      </div>
    </MainLayout>
  );
};

export default DetailProductPage;
