import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Button from "../../elements/button";
import InputForm from "../../elements/input";
import { loginAuth } from "../../../services/auth/loginAuth";
import Loading from "../../elements/loading";
import { useCookies } from "react-cookie";

type ValidationErrors = {
  username?: string;
  password?: string;
};

type ErrorsMessageValidation = {
  username?: string;
  password?: string;
};

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<ErrorsMessageValidation>({});
  const [loginFailed, setLoginFailed] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setCookie = useCookies(["token"])[1];

  const usernameRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validationForm = (): boolean => {
    const validationErrors: ValidationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "username is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 char";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validationForm()) {
      setIsLoading(true);

      const data = {
        username: formData.username,
        password: formData.password,
      };

      const result = await loginAuth(data.username, data.password);
      setIsLoading(false);
      if (result.success) {
        setLoginFailed("");
        setCookie("token", result.data.data.data.token);
        window.location.href = "/";
      } else {
        setLoginFailed(result.data.response.data.message);
      }
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
          onInputChange={handleChange}
          errorMessage={errors.username}
        />
        <InputForm
          classname="mt-4"
          label="Password"
          name="password"
          placeholder="Silahkan masukkan password anda"
          type="password"
          onInputChange={handleChange}
          errorMessage={errors.password}
        />
        <div className="flex justify-center">
          <Button classname="bg-primary text-white mt-6 lg:mt-12" type="submit">
            Masuk
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
