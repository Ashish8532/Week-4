import { CartItems } from "./cart-items";
import { ShippingDetails } from "./shipping-details";

export interface Order {
    id: number;
    shippingDetails: ShippingDetails;
    cartItem: CartItems[];
    totalPrice: number;
    orderDate: Date;
}
