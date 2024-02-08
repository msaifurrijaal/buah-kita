import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { IsLoginContextProvider } from "./context/IsLogin";
import { CartContextProvider } from "./context/CartContext";
import { UserAuthRoute, UserPrivateRoute } from "./components/routes/UserRoute";
import React, { Suspense } from "react";
import LoadingPage from "./components/elements/loading/LoadingPage";

const HomePage = React.lazy(() =>
  wait(1000).then(() => import("./pages/home"))
);
const LoginPage = React.lazy(() =>
  wait(1000).then(() => import("./pages/login"))
);
const ProductPage = React.lazy(() =>
  wait(1000).then(() => import("./pages/products"))
);
const RegisterPage = React.lazy(() =>
  wait(1000).then(() => import("./pages/register"))
);
const DetailProductPage = React.lazy(() =>
  wait(1000).then(() => import("./pages/detail-product"))
);
const PaymentPage = React.lazy(() =>
  wait(500).then(() => import("./pages/payment"))
);
const InvoicePage = React.lazy(() =>
  wait(500).then(() => import("./pages/invoice"))
);
const HistoryPage = React.lazy(() =>
  wait(1000).then(() => import("./pages/history"))
);
const CartPage = React.lazy(() =>
  wait(1000).then(() => import("./pages/cart"))
);
const ContactPage = React.lazy(() =>
  wait(500).then(() => import("./pages/contact"))
);

const WithSuspend = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<LoadingPage />}>{children}</Suspense>;
};

const wait = (num: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, num);
  });
};

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
          <WithSuspend>
            <RouterProvider router={router} />
          </WithSuspend>
        </CartContextProvider>
      </IsLoginContextProvider>
    </>
  );
}

export default App;
