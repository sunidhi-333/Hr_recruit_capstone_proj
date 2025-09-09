import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface JobPosting {
  _id?: string;
  title: string;
  description: string;
  requirements: string[];
  qualifications: string[];
}

@Injectable()
export class JobPostingService {
  private apiUrl = 'http://localhost:5000/api/jobpostings';

  constructor(private http: HttpClient) {}

  getJobPostings(): Observable<JobPosting[]> {
    return this.http.get<JobPosting[]>(this.apiUrl);
  }

  getJobPostingById(id: string): Observable<JobPosting> {
    return this.http.get<JobPosting>(`${this.apiUrl}/${id}`);
  }

  createJobPosting(job: JobPosting): Observable<JobPosting> {
    return this.http.post<JobPosting>(this.apiUrl, job);
  }

  updateJobPosting(id: string, job: JobPosting): Observable<JobPosting> {
    return this.http.put<JobPosting>(`${this.apiUrl}/${id}`, job);
  }

  deleteJobPosting(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
