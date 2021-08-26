import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL:  process.env.API_URL,
  withCredentials: true,
});

export default instance;
