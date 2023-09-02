import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private users: User[] = [];

  constructor() {}
  
  // User Registration
  register(user: User): boolean {
    this.isLoggedIn = false;
    this.users.push(user); // Add the new user to the array
    sessionStorage.setItem('isLoggedIn', 'false');
    return true;
  }

  login(email: string, password: string): boolean {
    if (this.users.length === 0) {
      return false; // No users stored yet
    }

    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.isLoggedIn = true;
      sessionStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('isLoggedIn');
  }


  isAuthenticated(): boolean {
    return this.isLoggedIn || sessionStorage.getItem('isLoggedIn') === 'true';
  }

  // getUser(): User | null {
  //   return this.users;
  // }
}
