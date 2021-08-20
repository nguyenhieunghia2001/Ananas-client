import api from "./index";

const getAllOrder = async () => {
  try {
    const res = await api.get("/order/getall");
    return res.data?.orders;
  } catch (error) {
    return error;
  }
};
const getOrderById = async (id) => {
  try {
    const res = await api.get(`/order/${id}`);
    return res.data?.order;
  } catch (error) {
    return error;
  }
};

export { getAllOrder, getOrderById };
