import Hero from "../../components/fragments/home/Hero";
import MainLayout from "../../components/partials/layout/MainLayout";
import { useEffect, useState } from "react";
import getBuah from "../../services/data/getBuah";
import { Fruit } from "../../types/interfaces/fruit";
import ListProduct from "../../components/fragments/home/ListProducts";
import AboutSection from "../../components/fragments/home/AboutSection";
import RulesSection from "../../components/fragments/home/RulesSection";
import PartnerSection from "../../components/fragments/home/PartnerSection";

const HomePage = () => {
  const [products, setProducts] = useState<Fruit[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBuah();

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

  return (
    <MainLayout>
      <div className="pt-24 sm:pt-28 md:pt-0">
        <Hero />
        <RulesSection />
        <ListProduct products={products} />
        <AboutSection />
        <PartnerSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
