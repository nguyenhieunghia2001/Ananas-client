import api from "./index";

const getInfo = async () => {
  try {
    const res = await api.get("/account/getinfo");
    return res.data.account;
  } catch (error) {
    return error;
  }
};
const updateInfo = async ({ public_Id, username, phone }) => {
  try {
    let formData = new FormData();
    formData.append("avatar", public_Id);
    formData.append("username", username);
    formData.append("phone", phone);
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
const updatePass = async (oldPass, newPass, confirmPass) => {
  try {
    const res = await api.post(`/account/updatepass`, {
      oldPass,
      newPass,
      confirmPass,
    });
    return {
      status: res.status,
      data: res.data
    }
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data.errors,
    }
  }
};
export { getInfo, updateInfo, updatePass };
