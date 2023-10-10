import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  params: {
    storeId: process.env.NEXT_STORE_ID,
  },
});

export default axiosInstance;
