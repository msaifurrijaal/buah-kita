import { useState } from "react";
import { Fruit } from "../../../types/interfaces/fruit";
import ButtonAddCart from "../../elements/button/ButtonAddCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Button from "../../elements/button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { rupiahFormatter } from "../../../utils/rupiah-formatter";

type CartSectionProps = {
  isLoading: boolean;
  fruit: Fruit | undefined;
};

const CartSection = ({ isLoading, fruit }: CartSectionProps) => {
  const [productCart, setProductCart] = useState(1);
  return (
    <div className="w-full lg:w-3/12 mt-4 lg:mt-0 px-4">
      {fruit && !isLoading && (
        <div className="rounded-lg border p-4">
          <h1 className="text-lg font-semibold">Atur jumlah dan catatan</h1>
          <div className="flex items-center mt-4 md:mt-6">
            <ButtonAddCart
              productCart={productCart}
              incrementCart={() =>
                productCart == fruit.stock
                  ? setProductCart(productCart)
                  : setProductCart(productCart + 1)
              }
              decrementCart={() =>
                productCart > 1
                  ? setProductCart(productCart - 1)
                  : setProductCart(productCart)
              }
            />
            <p className="ms-4">Sisa Stok : {fruit?.stock - productCart}</p>
          </div>
          <div className="flex items-center mt-4 cursor-pointer">
            <FontAwesomeIcon icon={faPencil} color="#4E9F3D" />
            <p className="ms-2 font-semibold text-primary text-base">
              Tambah Catatan
            </p>
          </div>
          <div className="flex items-center mt-2 justify-between">
            <p className="text-base text-gray-500">Subtotal</p>
            <p className="text-lg font-semibold text-dark">
              {fruit.discount > 0 ? (
                <span>
                  {rupiahFormatter(
                    fruit.price * productCart -
                      fruit.price * productCart * fruit.discount
                  )}
                </span>
              ) : (
                <span>{rupiahFormatter(fruit.price * productCart)}</span>
              )}
            </p>
          </div>
          <Button classname="font-medium text-base bg-primary text-white rounded-md py-2 px-4 hover:bg-green-700 mt-3 w-full">
            + Keranjang
          </Button>
          <Button
            classname="mt-2 font-medium text-base bg-white text-primary border border-primary rounded-md py-2 px-4
            hover:border-green-700 hover:text-green-700 w-full"
          >
            Beli Sekarang
          </Button>
        </div>
      )}
      {isLoading && <Skeleton height="200px" className="" width="100%" />}
    </div>
  );
};

export default CartSection;
