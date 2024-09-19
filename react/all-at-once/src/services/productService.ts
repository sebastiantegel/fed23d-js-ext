import { IProduct } from "../models/IProduct";
import { get } from "./serviceBase";

export const getProducts = async (): Promise<IProduct[]> => {
  return await get<IProduct[]>("");
};

// export const getProduct = async (id: number) => {
//   const response = await axios.get<IProduct[]>(
//     "https://medieinstitutet-wie-products.azurewebsites.net/api/products"
//   );
// };
