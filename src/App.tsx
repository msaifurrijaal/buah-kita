import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { IsLoginContextProvider } from "./context/IsLogin";
import ProductPage from "./pages/products";
import RegisterPage from "./pages/register";
import DetailProductPage from "./pages/detail-product";
import PaymentPage from "./pages/payment";
import InvoicePage from "./pages/invoice";
import HistoryPage from "./pages/history";
import { CartContextProvider } from "./context/CartContext";
import CartPage from "./pages/cart/CartPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/products",
      element: <ProductPage />,
    },
    {
      path: "/product/:id",
      element: <DetailProductPage />,
    },
    {
      path: "/payment",
      element: <PaymentPage />,
    },
    {
      path: "/invoice",
      element: <InvoicePage />,
    },
    {
      path: "/history",
      element: <HistoryPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return (
    <>
      <IsLoginContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </IsLoginContextProvider>
    </>
  );
}

export default App;
