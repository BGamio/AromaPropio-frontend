import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {

  private apiUrl = 'http://localhost:8080/api/v1/perfumes';

  constructor(private http: HttpClient) { }

  getPerfumes(): Observable<Object> {
    return this.http.get(`${this.apiUrl}`);
  }

  createPerfume(perfume: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, perfume);
  }
}
