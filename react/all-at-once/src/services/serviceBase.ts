import axios from "axios";

const BASE_URL =
  "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

export const get = async <T>(endpoint: string): Promise<T> => {
  const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
  return response.data;
};
