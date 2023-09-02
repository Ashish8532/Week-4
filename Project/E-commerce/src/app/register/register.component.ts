import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = {
    email: '',
    password: '',
    orderHistory: []
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  register(): void {
    this.authService.register(this.user);
    this.router.navigate(['/login']);
  }
}
