import { FormEvent, useEffect, useRef, useState } from "react";
import Button from "../../elements/button";
import InputForm from "../../elements/input";
import { loginAuth } from "../../../services/auth/loginAuth";
import Loading from "../../elements/loading";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setCookie = useCookies(["token"])[1];

  const usernameRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const data = {
      username: (event.target as any).username.value,
      password: (event.target as any).password.value,
    };

    try {
      const result = await loginAuth(data.username, data.password);
      setIsLoading(false);
      if (result.success) {
        setLoginFailed("");
        setCookie("token", result.data.data.data.token, { path: "/" });
        window.location.href = "/";
      } else {
        setLoginFailed(result.data.response.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          classname="mt-8"
          label="Username"
          name="username"
          placeholder="Silahkan masukkan username anda "
          type="text"
          ref={usernameRef}
        />
        <InputForm
          classname="mt-4"
          label="Password"
          name="password"
          placeholder="Silahkan masukkan password anda"
          type="password"
        />
        <div className="flex justify-center">
          <Button classname="bg-primary text-white mt-6 lg:mt-12" type="submit">
            LOGIN
          </Button>
        </div>
      </form>
      {loginFailed && (
        <p className="text-red-500 text-center mt-5">{loginFailed}</p>
      )}
      {isLoading && <Loading />}
    </>
  );
};

export default LoginForm;
