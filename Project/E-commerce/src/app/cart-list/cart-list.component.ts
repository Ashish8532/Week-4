import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Product[] = [];
  totalCartPrice = 0;


  constructor(private cartService: CartService, private userService: AuthService) { 
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.totalCartPrice = this.cartService.calculateTotalPrice();
    });
  }

  updateQuantity(item: Product) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    this.cartService.updateCartItemQuantity(item);
    this.totalCartPrice = this.cartService.calculateTotalPrice();
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
  }
}
