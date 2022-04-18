import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private url = 'http://localhost:3000/api/users/me';

  constructor(private http: HttpClient, private router: Router) {}

  getCurrentUserData() {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    return this.http.get<any>(this.url, {
      headers: headers,
    });
  }
}
