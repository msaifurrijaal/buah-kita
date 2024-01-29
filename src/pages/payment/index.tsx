import { useLocation } from "react-router-dom";
import MainLayout from "../../components/partials/layout/MainLayout";
import { CheckoutData } from "../../types/interfaces/checkoutData";
import WarningCart from "../../components/elements/payment/WarningCard";
import ButtonAddCart from "../../components/elements/button/ButtonAddCart";
import { useState } from "react";
import { PaymentMethod } from "../../types/interfaces/paymentMethod";
import PaymentMethodCard from "../../components/elements/payment/PaymentMethodCard";
import ShoppingSummary from "../../components/fragments/payment/ShoppingSummary";
import { postBuy } from "../../services/data/postBuy";
import { useCookies } from "react-cookie";
import PopupLoading from "../../components/elements/popup/PopupLoading";

const paymentMethod: PaymentMethod[] = [
  {
    image: "/images/payment/bca.png",
    title: "Bank BCA",
    isShow: true,
  },
  {
    image: "/images/payment/mandiri.png",
    title: "Bank Mandiri",
    isShow: false,
  },
  {
    image: "/images/payment/bri.png",
    title: "Bank BRI",
    isShow: false,
  },
  {
    image: "/images/payment/visa.png",
    title: "VISA",
    isShow: false,
  },
];

const PaymentPage = () => {
  const location = useLocation();
  const checkoutData: CheckoutData | undefined = location.state?.checkoutData;
  const [productCart, setProductCart] = useState(checkoutData?.amount ?? 1);
  const [isLoading, setIsLoading] = useState(false);
  const [cookies, ,] = useCookies(["token"]);

  const handleBuy = async () => {
    try {
      setIsLoading(true);
      const result = await postBuy(
        cookies.token,
        "bca",
        productCart.toString(),
        checkoutData!.fruit.id.toString()
      );
      setIsLoading(false);
      if (result.success) {
        console.log(result.data.data);
        console.log(result.data.data.status_message);
      } else {
        console.log(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainLayout>
        {checkoutData && (
          <div className="container py-16 md:py-20 px-4">
            <h1 className="text-xl md:text-2xl font-semibold mt-4">
              Beli Langsung
            </h1>
            <div className="flex flex-wrap mt-4">
              <div className="w-full md:w-2/3 md:pe-1">
                <WarningCart />
                <h1 className="mt-4 text-lg md:text-xl font-semibold">
                  Barang yang dibeli
                </h1>
                <div className="flex flex-wrap mt-2">
                  <div className="w-2/6 sm:w-1/6 p-1 aspect-w-1 aspect-h-1">
                    <img
                      src={checkoutData.fruit.img}
                      alt={checkoutData.fruit.name}
                      className="object-cover w-2/3 aspect-square rounded-lg"
                    />
                  </div>
                  <div className="w-4/6 sm:w-4/6">
                    <p className="text-base font-semibold">
                      {checkoutData.fruit.name}
                    </p>
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
                <h1 className="mt-4 text-lg md:text-xl font-semibold">
                  Pembayaran
                </h1>
                <div className="w-full sm:w-1/2 py-2">
                  <PaymentMethodCard paymentMethods={paymentMethod} />
                </div>
                <p className="text-sm text-red-500 mt-2">
                  * Mohon maaf metode pembayaran yang bisa digunakan saat ini
                  hanya Bank BCA
                </p>
              </div>
              <ShoppingSummary
                fruit={checkoutData.fruit}
                productCart={productCart}
                handleBuy={handleBuy}
              />
            </div>
          </div>
        )}
      </MainLayout>
      {isLoading && <PopupLoading />}
    </>
  );
};

export default PaymentPage;
