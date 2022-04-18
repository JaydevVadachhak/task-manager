import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  private url = 'http://localhost:3000/api/users/me';
  constructor(private http: HttpClient) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
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
