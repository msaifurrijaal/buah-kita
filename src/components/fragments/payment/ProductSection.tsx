import React from "react";
import ButtonAddCart from "../../elements/button/ButtonAddCart";
import { CheckoutData } from "../../../types/interfaces/checkoutData";

type ProductSectionProps = {
  checkoutData: CheckoutData;
  productCart: number;
  setProductCart: React.Dispatch<React.SetStateAction<number>>;
};

const ProductSection = ({
  checkoutData,
  productCart,
  setProductCart,
}: ProductSectionProps) => {
  return (
    <>
      <h1 className="mt-4 text-lg md:text-xl font-semibold">
        Barang yang dibeli
      </h1>
      <div className="flex flex-wrap mt-2">
        <div className="w-2/6 sm:w-1/6 p-1 aspect-w-1 aspect-h-1">
          <img
            src={checkoutData.fruit.img}
            alt={checkoutData.fruit.name}
            loading="lazy"
            className="object-cover w-2/3 aspect-square rounded-lg"
          />
        </div>
        <div className="w-4/6 sm:w-4/6">
          <p className="text-base font-semibold">{checkoutData.fruit.name}</p>
          <p className="text-sm text-gray-500 mt-1">
            Berat : {checkoutData.fruit.weight} Kg
          </p>
          <p className="text-sm text-red-500 mt-1">
            Sisa : {checkoutData.fruit.stock - productCart}
          </p>
        </div>
        <div className="w-full sm:w-1/6 flex">
          <div className="ml-auto">
            <ButtonAddCart
              productCart={productCart}
              incrementCart={() =>
                productCart == checkoutData.fruit.stock
                  ? setProductCart(productCart)
                  : setProductCart(productCart + 1)
              }
              decrementCart={() =>
                productCart > 1
                  ? setProductCart(productCart - 1)
                  : setProductCart(productCart)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
