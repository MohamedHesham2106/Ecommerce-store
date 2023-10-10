import { Color } from "@/types";
import axiosInstance from "@/lib/axios";

const getColors = async (): Promise<Color[]> => {
  const response = await axiosInstance.get("/colors");
  return response.data.data;
};

export default getColors;
