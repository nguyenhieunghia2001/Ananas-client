import api from "./index";

const getInfo = async () => {
  try {
    const res = await api.get("/account/getinfo");
    return res.data.account;
  } catch (error) {
    return error;
  }
};
const updateInfo = async (avatar) => {
  try {
    let formData = new FormData();
    formData.append("avatar", avatar);
    const res = await api.post("/account/updateinfo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
export { getInfo, updateInfo };
