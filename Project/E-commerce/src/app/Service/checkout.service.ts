import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Models/product';
import { ShippingDetails } from '../Models/shipping-details';
import { CartItems } from '../Models/cart-items';
import { Order } from '../Models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  private orderedItemsSubject = new BehaviorSubject<Product[]>([]);
  orderedItems$ = this.orderedItemsSubject.asObservable();

  private shippingDetailsSubject = new BehaviorSubject<ShippingDetails | null>(null);
  shippingDetails$ = this.shippingDetailsSubject.asObservable();

  private cartModelSubject = new BehaviorSubject<CartItems | null>(null);
  cartModel$ = this.cartModelSubject.asObservable();

  setOrderedItems(order: Order) {
    const existingOrders = this.ordersSubject.getValue();
    const updatedOrders = [...existingOrders, order];
    this.ordersSubject.next(updatedOrders);
  }


  setShippingDetails(details: ShippingDetails) {
    this.shippingDetailsSubject.next(details);
  }

  calculateTotalPrice(items: Product[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getLastPlacedOrder(): Order | null {
    const orders = this.ordersSubject.getValue();
    if (orders.length > 0) {
      return orders[orders.length - 1];
    } else {
      return null; // No orders placed yet
    }
  }
  
  getOrderHistory(): Order[] {
    return this.ordersSubject.getValue();
  }
}
