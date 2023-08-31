import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      // Navigate to a protected page (if needed) upon successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Display error message if login attempt fails
      alert('Invalid email or password');
    }
  }
}
