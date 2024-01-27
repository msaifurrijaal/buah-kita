import { useCookies } from "react-cookie";
import AxiosInstance from "../api/AxiosInstance";

export const logoutAuth = async () => {
  const axiosInstance = AxiosInstance();
  const [cookies] = useCookies(["token"]);

  try {
    const response = await axiosInstance
      .post(
        "user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${cookies}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return {
          success: true,
          data: res,
        };
      })
      .catch((err) => {
        return {
          success: false,
          data: err,
        };
      });
    return response;
  } catch (error) {
    return {
      success: false,
      data: error,
    };
  }
};
