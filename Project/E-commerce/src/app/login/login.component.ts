import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    const success = this.authService.login(this.email, this.password);
    if (success) {
      // Navigate to a protected page (if needed) upon successful login
      this.router.navigate(['/product']);
    } else {
      // Display error message if login attempt fails
      alert('Invalid email or password');
    }
  }
}
