import { useEffect, useState } from "react";
import MainLayout from "../../components/partials/layout/MainLayout";
import { useCart } from "../../context/CartContext";
import getBuah from "../../services/data/getBuah";
import { Fruit } from "../../types/interfaces/fruit";
import TableCartLayout from "../../components/fragments/cart/TableCart";

const CartPage = () => {
  const [products, setProducts] = useState<Fruit[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useCart();

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

  useEffect(() => {
    if (
      Array.isArray(products) &&
      Array.isArray(cart) &&
      products.length > 0
    ) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        if (product) {
          return acc + product.price * item.qty;
        }
        return acc;
      }, 0);
      setTotalPrice(sum);
    }
  }, [products, cart]);

  return (
    <MainLayout>
      <div className="container py-16 md:py-20 min-h-screen">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-4">
          Your Cart
        </h1>
        {cart != null && (
          <TableCartLayout
            products={products}
            totalPrice={totalPrice}
            cart={cart}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default CartPage;
