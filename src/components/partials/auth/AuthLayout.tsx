import { Link } from "react-router-dom";

type AuthLayoutProps = {
  title: string;
  children: React.ReactNode;
  navigationType: string;
};

type NavigationProps = {
  type: string;
};

const AuthLayout = ({ title, children, navigationType }: AuthLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-wrap">
      <div
        className={`hidden lg:block lg:w-1/2 ${"bg-[url('/images/login/bg-login.jpg')]"}`}
      ></div>
      <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
        <div className="w-full md:w-2/3 p-8 rounded-md shadow-xl">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Logo buahkita"
                className="max-w-40 -ml-2"
              />
            </Link>
          </div>
          {children}
          <Navigation type={navigationType} />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }: NavigationProps) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Tidak memiliki akun?{" "}
        <Link to="/register" className="font-bold text-accent">
          Daftar
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Sudah memiliki akun?{" "}
        <Link to="/login" className="font-bold text-accent">
          Masuk
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
