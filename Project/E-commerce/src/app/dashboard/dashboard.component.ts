import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../Service/checkout.service';
import { Order } from '../Models/order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orderHistory: Order[] = [];

  constructor(private orderService: CheckoutService) {}

  ngOnInit(): void {
    this.orderHistory = this.orderService.getOrderHistory();
  }
}