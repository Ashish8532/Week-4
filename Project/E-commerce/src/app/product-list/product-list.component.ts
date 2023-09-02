import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: any[] = [];
  filterForm!: FormGroup;
  selectedProduct: any = {};
  allCategories: string[] = []; 

  constructor(private productService: ProductService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      category: ['all'],
      sort: ['price-low-to-high'],
    });

    this.productService.getProducts().subscribe((data: Product[])=>{
      this.products = data;
      this.filterProducts();
    }); 
    
    this.productService.getAllCategories().subscribe((categories: string[]) => {
      this.allCategories = categories;
    });

    this.filterForm.valueChanges.subscribe(() => {
      this.filterProducts();
    });
  }

  private filterProducts() {
    const categoryFilter = this.filterForm.get('category')?.value;
    const sortOption = this.filterForm.get('sort')?.value;

    // Apply filtering based on selected category
    if (categoryFilter === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === categoryFilter);
    }

    // Apply sorting
    if (sortOption === 'price-low-to-high') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-to-low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  onProductSelected(product: any) {
    this.selectedProduct = product; // Set the selected product
  }
}
