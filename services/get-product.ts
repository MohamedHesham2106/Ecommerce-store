import axiosInstance from "@/lib/axios";
import { Product } from "@/types";

const getProduct = async (id: string): Promise<Product> => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data.data;
};
export default getProduct;