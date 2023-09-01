import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthService, private router: Router) {
    console.log('dashboard');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
