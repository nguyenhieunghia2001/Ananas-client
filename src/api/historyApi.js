import api from "./index";

const getProductByEmail = async () => {
  try {
    const res = await api.get("/history");
    return {
      status: 200,
      data: res.data?.history,
    };
  } catch (error) {
    return {
      status: 400,
    };
  }
};
const addProductHistory = async (productId) => {
  try {
    const res = await api.get(`/history/add?productId=${productId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export { getProductByEmail, addProductHistory };
