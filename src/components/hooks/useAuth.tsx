import { useEffect } from "react";
import { useIsUserLogin } from "../../context/IsLogin";

export const useBeforeLogin = () => {
  const { isUserLogin } = useIsUserLogin();

  useEffect(() => {
    if (!isUserLogin) {
      window.location.href = "/login";
    }
  }, []);
};

export const useAfterLogin = () => {
  const { isUserLogin } = useIsUserLogin();

  useEffect(() => {
    if (isUserLogin) {
      window.location.href = "/";
    }
  }, []);
};
