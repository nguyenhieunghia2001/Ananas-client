import api from "./index";

const getAllStatus = async () => {
    try {
        const res = await api.get('/statuses/all');
        return res.data.statuses;
    } catch (error) {
        return error;
    }
}
const getStatusById = async (id) => {
    try {
      const res = await api.get(`/statuses/${id}`);
      return res.data?.status;
    } catch (error) {
      return error;
    }
  };
  const addStatus = async (name) => {
    try {
      const res = await api.post("statuses/add", { name });
      return res;
    } catch (error) {
      return {
        status: error.response.status,
        data: error.response.data.errors,
      };
    }
  };
  const editStatus = async (id, name) => {
    try {
      const res = await api.post("statuses/edit", { id, name });
      return res;
    } catch (error) {
      return {
        status: error.response.status,
        data: error.response.data.errors,
      };
    }
  };
export {
    getAllStatus,
    getStatusById,
    addStatus,
    editStatus
}