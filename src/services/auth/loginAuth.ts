import AxiosInstance from "../api/AxiosInstance";

export const loginAuth = async (username: string, password: string) => {
  const axiosInstance = AxiosInstance();
  try {
    const response = await axiosInstance
      .post("login", {
        username,
        password,
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
