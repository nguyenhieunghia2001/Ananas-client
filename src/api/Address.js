import api from "./index";
import axios from "axios";

const getCity = async () => {
  try {
    const res = await axios.get(
      "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province",
      {
        headers: { token: "b1d1aab3-ef89-11eb-9388-d6e0030cbbb7" },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
const getDistrict = async (codeCity) => {
  try {
    const res = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${codeCity}`,
      {
        headers: { token: "b1d1aab3-ef89-11eb-9388-d6e0030cbbb7" },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
const getWards = async (codeDistrict) => {
  try {
    const res = await axios.get(
      `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${codeDistrict}`,
      {
        headers: { token: "b1d1aab3-ef89-11eb-9388-d6e0030cbbb7" },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

const getAllAddress = async () => {
  try {
    const res = await api.get("/address/getAll");
    return res.data;
  } catch (error) {
    return error;
  }
};
const addAddress = async (formData) => {
  try {
    const res = await api.post("/address/add", formData);
    return res.data;
  } catch (error) {
    return error;
  }
};
const updateAddress = async (formData) => {
  try {
    const res = await api.post("/address/update", formData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error;
  }
};
const removeAddress = async (id) => {
  try {
    const res = await api.get(`/address/remove/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
const changeActive = async (id) => {
  try {
    const res = await api.get(`/address/changeactive/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export {
  getCity,
  getDistrict,
  getWards,
  addAddress,
  getAllAddress,
  removeAddress,
  changeActive,
  updateAddress
};
