import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  NavbarComponent } from './core/navbar/navbar';
import { LoginComponent } from './auth/login/login';
import { DashboardComponent } from './dashboard/dashboard';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, FormsModule, HttpClientModule, RouterModule, LoginComponent, DashboardComponent, ReactiveFormsModule, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'Recruitment Agent';  // define title property to fix template error
}
