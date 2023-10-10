import axiosInstance from "@/lib/axios";
import { Billboard } from "@/types";

const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await axiosInstance.get(`/billboard/${id}`);
  return response.data.data;
};
export default getBillboard;
