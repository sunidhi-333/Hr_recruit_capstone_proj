import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  stats = [
    { count: 2, label: 'Job Descriptions Created' },
    { count: 3, label: 'Resumes Uploaded' },
    { count: 3, label: 'Candidates Processed' },
    { count: 1, label: 'Jobcode-wise Resumes' }
  ];
}
