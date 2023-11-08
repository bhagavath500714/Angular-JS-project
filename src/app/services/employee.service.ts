import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
private apiUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books';

  constructor(private http: HttpClient) { }

  // Read (GET)
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Create (POST)
  create(body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, body);
  }

  // Read by ID (GET)
  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Update (PUT)
  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete (DELETE)
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
