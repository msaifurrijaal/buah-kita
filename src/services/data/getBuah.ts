import AxiosInstance from "../api/AxiosInstance";

const getBuah = async () => {
  const axiosInstance = AxiosInstance();

  try {
    const response = await axiosInstance.get("product");

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: error,
    };
  }
};

export default getBuah;
