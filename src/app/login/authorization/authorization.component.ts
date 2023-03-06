import { formatCurrency } from '@angular/common';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';
import { AuthorizationService } from '../authorization.service';
import { User } from '../user.model';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
  userInfo: User = {
    email: '',
    password: ''
  };
  
  constructor(
    private authService: AuthorizationService
    ) {}
  
  login(userInfo: User) {
    this.authService.login(userInfo);
  }

}