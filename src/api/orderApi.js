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
const getRevenueDay = async () => {
  try {
    const res = await api.get(`/order/revenue/day`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const getRevenueWeek = async () => {
  try {
    const res = await api.get(`/order/revenue/week`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const getRevenueMonth = async () => {
  try {
    const res = await api.get(`/order/revenue/month`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const getCountStatusOrder = async () => {
  try {
    const res = await api.get(`/order/countstatus`);
    return res.data;
  } catch (error) {
    return error;
  }
};
export { getAllOrder, getOrderById, getRevenueDay, getRevenueWeek, getRevenueMonth, getCountStatusOrder };
