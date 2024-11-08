import { ProductNutrients } from "../utils/interfaces/ProductNutrients";


export interface ProductInfo {
  name: string;
  servingSize: string;
  nutrients: ProductNutrients;
  success: boolean;
  error?: string;
}
