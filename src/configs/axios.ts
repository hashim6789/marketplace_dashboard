import axios from "axios";

const BACKEND_API_URL = "http://localhost:3000/api";

const axiosInstance = axios.create({
  baseURL: BACKEND_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
