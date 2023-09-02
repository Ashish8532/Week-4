import { Component, OnInit } from '@angular/core';
import { ShippingDetails } from '../Models/shipping-details';
import { CartService } from '../Service/cart.service';
import { CheckoutService } from '../Service/checkout.service';
import { Router } from '@angular/router';
import { CartItems } from '../Models/cart-items';
import { Order } from '../Models/order';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm!: FormGroup;

  shippingDetails: ShippingDetails = {} as ShippingDetails;
  cartItems: CartItems = { products: [], totalPrice: 0 };
  totalPrice = 0;

  constructor(private cartService: CartService, 
    private checkoutService: CheckoutService, 
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
      pincode: new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)]),

      cardNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\d{16}$/)]),
      expirationDate: new FormControl(null, [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]),
      cvv: new FormControl(null, [Validators.required, Validators.pattern(/^\d{3}$/)]),
    });

    this.checkoutForm.patchValue({
      name: this.shippingDetails.name,
      address: this.shippingDetails.address,
      phone: this.shippingDetails.phone,
      city: this.shippingDetails.city,
      state: this.shippingDetails.state,
      pincode: this.shippingDetails.pincode,
    });

    this.cartService.cartItems$.subscribe(items => {
      this.cartItems.products = items;
      this.totalPrice = this.cartService.calculateTotalPrice(); // Use the calculated total price from the service
    });
  } 

  placeOrder() {
    if(this.authService.isAuthenticated())
    {
      if (this.checkoutForm.valid) {
        const order: Order = {
          id: this.generateUniqueId(), // Generate a unique ID
          shippingDetails: this.checkoutForm.value,
          cartItem: [{
            products: this.cartItems.products, // Use the actual cart items
            totalPrice: this.cartItems.totalPrice
          }], // Convert to an array of CartItems
          totalPrice: this.totalPrice,
          orderDate: new Date()
        };
          this.checkoutService.setOrderedItems(order);
          // Clear the cart after placing the order
          this.cartService.clearCart();
          // Navigate to the order confirmation page
          this.router.navigate(['/order-confirmation']);
      }
    }
  }

  generateUniqueId(): number {
    return Math.floor(Math.random() * 1000000); // Replace with a more robust ID generation logic
  }

  noSpaceAllowed(control: FormControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed: true}
    }
    return null;
  }
}
