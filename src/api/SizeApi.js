import api from "./index";

const getAllSize = async () => {
  try {
    const res = await api.get("/size/all");
    return res.data.sizes;
  } catch (error) {
    return error;
  }
};
const getSizeById = async (id) => {
  try {
    const res = await api.get(`/size/${id}`);
    return res.data?.size;
  } catch (error) {
    return error;
  }
};
const addSize = async (name) => {
  try {
    const res = await api.post("size/add", { name });
    return res;
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data.errors,
    };
  }
};
const editSize = async (id, name) => {
  try {
    const res = await api.post("size/edit", { id, name });
    return res;
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data.errors,
    };
  }
};
export { getAllSize, getSizeById, addSize, editSize };
