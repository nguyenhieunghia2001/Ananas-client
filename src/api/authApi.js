import api from "./index";

const auth = async (email, password) => {
  let result = {}
  await api
    .post("/auth/register", {
      email,
      password,
    })
    .then((res) => {
      result['status'] = res.status;
      result['data'] = res.data;
    })
    .catch((error) => {
      // console.log(Promise.reject(error));
      result['status'] = error.response.status;
      result['data'] = error.response.data.errors;

    });
  return result;
};

export {
  auth,
  // getProductById
};
