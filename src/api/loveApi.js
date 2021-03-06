import api from "./index";

const getProductLoveByEmail = async () => {
  try {
    const res = await api.get("/love");
    return {
      status: 200,
      data: res.data.love,
    };
  } catch (error) {
    return {
      status: 400,
    };
  }
};
const addProductLove = async (productId) => {
  try {
    const res = await api.get(`/love/add?productId=${productId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const removeProductLove = async (productId) => {
  try {
    const res = await api.get(`/love/remove?productId=${productId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export { getProductLoveByEmail, addProductLove, removeProductLove };
