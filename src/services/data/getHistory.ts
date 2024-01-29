import AxiosInstance from "../api/AxiosInstance";

export const getHistory = async (token: string) => {
  const axiosInstance = AxiosInstance();

  try {
    const response = await axiosInstance
      .get("product/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return {
          success: true,
          data: res.data,
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
