import { Component } from '@angular/core';
import { AuthService } from '../auth/auth';

@Component({
  selector: 'app-dashboard',
  // imports are not needed here
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
