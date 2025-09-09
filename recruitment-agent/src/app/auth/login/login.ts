import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authSerivce: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.username.trim() && this.password.trim()) {
      // TODO: Replace with real authentication logic
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please enter both username and password.';
    }
  }
}