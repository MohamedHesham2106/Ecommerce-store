import axiosInstance from "@/lib/axios";
import { Category } from "@/types";

const getCategory = async (id: string): Promise<Category> => {
  const response = await axiosInstance.get(`/categories/${id}`);
  return response.data.data;
};

export default getCategory;
