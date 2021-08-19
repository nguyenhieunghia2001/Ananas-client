import api from "./index";

const getAllCategory = async () => {
  try {
    const res = await api.get("/categories/all");
    return res.data.categories;
  } catch (error) {
    return error;
  }
};

const getCategoryById = async (id) => {
  try {
    const res = await api.get(`/categories/${id}`);
    return res.data?.category;
  } catch (error) {
    return error;
  }
};
const addCategory = async (name) => {
  try {
    const res = await api.post("categories/add", { name });
    return res.data;
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data.errors,
    };
  }
};
const editCategory = async ({ id, name }) => {
  try {
    const res = await api.post("categories/edit", { id, name });
    return res.data;
  } catch (error) {
    return error;
  }
};

export { getAllCategory, getCategoryById, addCategory, editCategory };
