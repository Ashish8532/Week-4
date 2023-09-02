import { Product } from "./product";

export interface CartItems {
    products: Product[];
  totalPrice: number;
}
