import AxiosInstance from "../api/AxiosInstance";

export const logoutAuth = async (token: string) => {
  const axiosInstance = AxiosInstance();

  try {
    const response = await axiosInstance
      .post(
        "user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};
