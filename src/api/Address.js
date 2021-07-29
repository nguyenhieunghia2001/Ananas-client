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

export { getCity, getDistrict, getWards };
