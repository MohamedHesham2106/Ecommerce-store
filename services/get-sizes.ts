import { Size } from "@/types";
import axiosInstance from "@/lib/axios";

const getSizes = async (): Promise<Size[]> => {
  const response = await axiosInstance.get("/sizes");
  return response.data.data;
};

export default getSizes;
