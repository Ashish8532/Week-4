import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Models/product';
import { ProductService } from '../Service/product.service';
import { CartService } from '../Service/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: number = 0;
  products: any = {};
  selectedQuantity = 1;


  constructor(private productService: ProductService, 
    private route: ActivatedRoute, 
    private cartService: CartService,
    private router: Router,
    private authService: AuthService) {
    }
   
  ngOnInit(): void {
    this.viewProductDetails();
  }

  viewProductDetails(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];

      this.productService.getProductById(this.productId)
        .subscribe((item: any) => {
          this.products = item;
          console.log("Post Displayed with correponding comments.");
        });
    });
  }

  displayRating(rating: number): string {
    const roundedRating = Math.round(rating);
    return '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  }

  addToCart(product: Product) {
    if(this.authService.isAuthenticated())
    {
      if (product && this.selectedQuantity > 0) {
        this.cartService.addToCart(product, this.selectedQuantity); // Add the product to the cart
        this.selectedQuantity = 1; // Reset the selected quantity to 1
        this.router.navigate(['/cart-list']);
      }
    }
    else {
      alert("Please login first!");
    }
  }
}
