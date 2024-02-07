import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHistory,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useIsUserLogin } from "../../../context/IsLogin";
import { useCookies } from "react-cookie";
import PopupDialog from "../../elements/popup/PopupDialog";
import { logoutAuth } from "../../../services/auth/logoutAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isUserLogin } = useIsUserLogin();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const location = useLocation();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const result = await logoutAuth(cookies.token);
      setIsLoading(false);
      if (result.success) {
        removeCookie("token");
        window.location.href = "/login";
      } else {
        console.log(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="cursor-pointer">
            <img
              src="/images/logo.png"
              alt="Logo buahkita"
              className="max-w-28"
            />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-4 cursor-pointer md:hidden"
          >
            <FontAwesomeIcon
              icon={open ? faXmark : faBars}
              style={{ color: "#020617" }}
            />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full pl-4 md:pl-0 md:w-auto transition-all duration-500 ease-in ${
              open ? "top-14 " : "top-[-490px]"
            }`}
          >
            <li className="group">
              <Link
                to="/"
                className={`font-medium text-base ${
                  location.pathname === "/" ? "text-primary" : "text-dark"
                } py-2 mx-4 flex group-hover:text-primary`}
              >
                Beranda
              </Link>
            </li>
            <li className="group">
              <Link
                to="/products"
                className={`font-medium text-base ${
                  location.pathname === "/products"
                    ? "text-primary"
                    : "text-dark"
                } py-2 mx-4 flex group-hover:text-primary`}
              >
                Produk
              </Link>
            </li>
            <li className="group">
              <Link
                to="/contact"
                className={`font-medium text-base ${
                  location.pathname === "/contact"
                    ? "text-primary"
                    : "text-dark"
                } py-2 mx-4 flex group-hover:text-primary`}
              >
                Kontak
              </Link>
            </li>
            {isUserLogin && (
              <li className="group">
                <Link
                  to="/history"
                  className="font-medium text-base text-dark py-2 mx-4 md:mx-2 flex"
                >
                  <FontAwesomeIcon
                    icon={faHistory}
                    style={{ color: "#000000" }}
                  />
                </Link>
              </li>
            )}
            {isUserLogin && (
              <li className="group">
                <Link
                  to="/cart"
                  className="font-medium text-base text-dark py-2 mx-4 md:mx-2 flex"
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      style={{ color: "#000000" }}
                    />
                    <p className="ms-1 inline-block">{0}</p>
                  </div>
                </Link>
              </li>
            )}
            {isUserLogin && (
              <li className="group">
                <Link
                  to=""
                  className="font-medium text-base text-dark py-2 mx-4 md:mx-2 flex"
                >
                  <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} />
                </Link>
              </li>
            )}

            {isUserLogin && (
              <li className="group">
                <Link
                  to=""
                  onClick={() => setModalOpen(true)}
                  className=" mx-4 md:mx-2 flex"
                >
                  <div
                    className="font-medium text-base bg-primary text-white rounded-md py-2 px-4 
              group-hover:bg-green-700"
                  >
                    Logout
                  </div>
                </Link>
              </li>
            )}
            {!isUserLogin && (
              <li className="group">
                <Link to="/login" className=" mx-4 md:mx-2 flex">
                  <div
                    className="font-medium text-base bg-primary text-white rounded-md py-2 px-4 
                  group-hover:bg-green-700"
                  >
                    Masuk
                  </div>
                </Link>
              </li>
            )}
            {!isUserLogin && (
              <li className="group">
                <Link to="/register" className="mx-4 md:mx-2 flex mt-3 md:mt-0">
                  <div
                    className="font-medium text-base bg-white text-primary border border-primary rounded-md py-2 px-4
              group-hover:border-green-700 group-hover:text-green-700"
                  >
                    Daftar
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {modalOpen && (
        <PopupDialog
          title="Apakah anda yakin ingin logout?"
          isLoading={isLoading}
          nOnClick={setModalOpen}
          yOnClick={handleLogout}
        />
      )}
    </>
  );
};

export default Navbar;
