import api from "./index";

const registerAuth = async (email, password, username) => {
  let result = {};
  await api
    .post("/auth/register", {
      email,
      password,
      username,
    })
    .then((res) => {
      result["status"] = res.status;
      result["data"] = res.data;
    })
    .catch((error) => {
      // console.log(Promise.reject(error));
      result["status"] = error.response.status;
      result["data"] = error.response.data.errors;
    });
  return result;
};
const loginAuth = async (email, password) => {
  try {
    const res = await api.post("/auth/login", {
      email,
      password,
    });
    return res;
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data.errors,
    };
  }
};
const loginAdmin = async (email, password) => {
  try {
    const res = await api.post("/auth/loginadmin", {
      email,
      password,
    });
    return {
      status: res.status,
      data: res.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: error.response.data?.errors,
    };
  }
};
const logoutAuth = async () => {
  let result = {};
  try {
    const res = await api.get("/auth/logout");
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const checkIsAuthWithInfo = async () => {
  try {
    const auth = await api.get("/auth/getInfoUserCurrent");
    console.log(auth);
    return {
      status: 200,
      data: auth.data,
    };
  } catch (error) {
    return {
      status: error.response?.status,
      data: error.response?.data?.errors,
    };
  }
};

export { registerAuth, loginAuth, checkIsAuthWithInfo, logoutAuth, loginAdmin };
