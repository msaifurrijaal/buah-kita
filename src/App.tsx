import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { IsLoginContextProvider } from "./context/IsLogin";
import ProductPage from "./pages/products";
import RegisterPage from "./pages/register";

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
