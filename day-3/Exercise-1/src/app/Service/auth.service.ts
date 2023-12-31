import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Check if both username and password are non-empty
    if (username === 'ashish' && password === 'ashish@12') {
      // For now, consider any non-empty credentials as valid
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isloggedInUser(): boolean {
    return this.isLoggedIn;
  }

}
