import AxiosInstance from "../api/AxiosInstance";

export const postBuy = async (
  token: string,
  bank: string,
  amount: string,
  product_id: string
) => {
  const axiosInstance = AxiosInstance();
  try {
    const response = await axiosInstance
      .post(
        "/product/buy",
        {
          bank,
          amount,
          product_id,
        },
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
