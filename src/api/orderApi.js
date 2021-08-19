import api from "./index";

const getAllOrder = async () => {
  try {
    const res = await api.get("/order/getall");
    return res.data?.orders;
  } catch (error) {
    return error;
  }
};

export { getAllOrder };
