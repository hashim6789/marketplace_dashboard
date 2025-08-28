import axios from "axios";
import { BACKEND_API_URL } from "./env";

export const axiosInstance = axios.create({
  baseURL: BACKEND_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
