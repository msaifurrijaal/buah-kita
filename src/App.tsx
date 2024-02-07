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
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import { UserAuthRoute, UserPrivateRoute } from "./components/routes/UserRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: (
        <UserAuthRoute>
          <LoginPage />
        </UserAuthRoute>
      ),
    },
    {
      path: "/register",
      element: (
        <UserAuthRoute>
          <RegisterPage />
        </UserAuthRoute>
      ),
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
      element: (
        <UserPrivateRoute>
          <PaymentPage />
        </UserPrivateRoute>
      ),
    },
    {
      path: "/invoice",
      element: (
        <UserPrivateRoute>
          <InvoicePage />
        </UserPrivateRoute>
      ),
    },
    {
      path: "/history",
      element: (
        <UserPrivateRoute>
          <HistoryPage />
        </UserPrivateRoute>
      ),
    },
    {
      path: "/cart",
      element: (
        <UserPrivateRoute>
          <CartPage />
        </UserPrivateRoute>
      ),
    },
    {
      path: "/contact",
      element: <ContactPage />,
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
