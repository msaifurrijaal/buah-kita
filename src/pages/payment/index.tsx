import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../../components/partials/layout/MainLayout";
import { CheckoutData } from "../../types/interfaces/checkoutData";
import WarningCart from "../../components/elements/payment/WarningCard";
import { useEffect, useState } from "react";
import { PaymentMethod } from "../../types/interfaces/paymentMethod";
import PaymentMethodCard from "../../components/elements/payment/PaymentMethodCard";
import ShoppingSummary from "../../components/fragments/payment/ShoppingSummary";
import { postBuy } from "../../services/data/postBuy";
import { useCookies } from "react-cookie";
import PopupLoading from "../../components/elements/popup/PopupLoading";
import { Invoice } from "../../types/interfaces/invoice";
import ProductSection from "../../components/fragments/payment/ProductSection";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (checkoutData == undefined) {
      window.location.href = "/";
    }
  }, []);

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
        const invoice: Invoice = result.data.data.data;
        navigate("/invoice", { state: { invoice } });
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
                <ProductSection
                  checkoutData={checkoutData}
                  productCart={productCart}
                  setProductCart={setProductCart}
                />
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
