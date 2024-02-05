import AxiosInstance from "../api/AxiosInstance";

export const registerAuth = async (
  username: string,
  email: string,
  phone: string,
  password: string
) => {
  const axiosInstance = AxiosInstance();
  try {
    const response = await axiosInstance
      .post("register", {
        username,
        email,
        password,
        phone,
      })
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
