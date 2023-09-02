import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product, quantity: number) {
    const newItem = { ...product, quantity: quantity };
    this.cartItems.push(newItem);
    this.cartItemsSubject.next(this.cartItems);
  }

  calculateTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateCartItemQuantity(updatedItem: Product) {
    const updatedCartItems = this.cartItems.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    
    this.cartItems = updatedCartItems;
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(item: Product) {
    const updatedCartItems = this.cartItems.filter(cartItem =>
      cartItem.id !== item.id
    );
    
    this.cartItems = updatedCartItems;
    this.cartItemsSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
