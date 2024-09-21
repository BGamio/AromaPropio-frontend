import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OlfactoryFamilyService {
  private apiUrl = 'http://localhost:8080/api/v1/type-of-aromas';

  constructor(private http: HttpClient) { }

  getOlfactoryFamilies(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createOlfactoryFamily(family: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, family);
  }
}
