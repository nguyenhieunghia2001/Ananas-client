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
  let result = {};
  await api
    .post("/auth/login", {
      email,
      password,
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
const checkIsAuthWithInfo = async () => {
  try {
    const auth = await api.get("/auth/getInfoUserCurrent");
    console.log(auth);
    return {
      status: 200,
      data: auth.data,
    };
  } catch (error) {
    console.log({
      status: error.response.status,
      data: error.response.data.errors,
    });
    return {
      status: error.response.status,
      data: error.response.data.errors,
    };
  }
};

export { registerAuth, loginAuth, checkIsAuthWithInfo };
