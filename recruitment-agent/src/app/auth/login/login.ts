import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Please enter email and password.';
    }
  }
}
