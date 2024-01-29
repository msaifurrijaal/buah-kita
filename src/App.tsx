import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { IsLoginContextProvider } from "./context/IsLogin";
import ProductPage from "./pages/products";
import RegisterPage from "./pages/register";
import DetailProductPage from "./pages/detail-product";
import PaymentPage from "./pages/payment";
import InvoicePage from "./pages/invoice";

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
  ]);

  return (
    <>
      <IsLoginContextProvider>
        <RouterProvider router={router} />
      </IsLoginContextProvider>
    </>
  );
}

export default App;
