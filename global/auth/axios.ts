import axios from "axios";
// BASE_URL is empty here since next.config.js proxies already everything to the backend
const BASE_URL = "";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
