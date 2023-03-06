import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

const AUTHENTICATION_KEY = 'user:authenticated'

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private isAuthenticated = new BehaviorSubject(this.getIsAuthenticated() || false);

  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(
    private router: Router
  ) { }

  login(userInfo: User) {
    this.setIsAuthenticated(true);
    this.isAuthenticated.next(true);
    this.router.navigateByUrl('/primary');
  }

  logout() {
    this.setIsAuthenticated(false);
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('/login');
  }

  private getIsAuthenticated(): boolean {
    return JSON.parse(localStorage.getItem(AUTHENTICATION_KEY));
  }

  private setIsAuthenticated(isAuthenticated: boolean) {
    localStorage.setItem(AUTHENTICATION_KEY, JSON.stringify(isAuthenticated));
  }


}
