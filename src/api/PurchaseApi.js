import api from "./index";

const getPurchase = async () => {
  try {
    const res = await api.get("/purchase");
    return res.data;
  } catch (error) {
    return error;
  }
};
const getPurchaseById = async (id) => {
  try {
    const res = await api.get(`/purchase/detail/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const addPurchase = async (formData) => {
  try {
    const res = await api.post("/purchase/add", formData);
    return res.data;
  } catch (error) {
    return error;
  }
};

export { getPurchase, addPurchase, getPurchaseById };
