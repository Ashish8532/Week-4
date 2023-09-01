import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise-1';

  isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isloggedInUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
