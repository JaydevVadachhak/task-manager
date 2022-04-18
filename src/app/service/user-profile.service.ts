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

  updateCurrentUserData(updateUserForm: any) {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    const params = {
      name: updateUserForm.name,
      age: updateUserForm.age,
    };

    this.http
      .patch<any>(this.url, params, {
        headers: headers,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/userProfile']);
          // window.location.reload();
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  deleteCurrentUserData() {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const headers = {
      Authorization: bearer,
      'Content-Type': 'application/json',
    };
    return this.http.delete(this.url, { headers: headers }).subscribe({
      next: (data) => {
        console.log(data);
        window.sessionStorage.setItem('isAuth', 'false');
        window.localStorage.removeItem('currentUser');
        this.router.navigate(['/userLogin']);
      },
      error: (error) => {
        console.error('There was an error!', error);
        console.log('Invalid Credentials');
      },
    });
  }
}
