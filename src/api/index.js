import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api-ananas.herokuapp.com/',
  withCredentials: true,
});

export default instance;
