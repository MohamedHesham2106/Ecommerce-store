import axiosInstance from "@/lib/axios";
import { Category } from "@/types";

const getCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get("/categories");
  return response.data.data;
};
export default getCategories;
