import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: any;
  user: any;
  usersInfo: any = [];
  usersList = [{}];

  constructor(private router: Router, private http: HttpClient) {}

  setUserData(user: any) {
    let new_user = {
      name: user.name,
      email: user.email,
      password: user.password,
      age: user.age,
    };

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(new_user);

    this.user = this.http
      .post('http://localhost:3000/api/users', body, {
        headers: headers,
      })
      .subscribe((res) => {
        localStorage.clear();
        const token = Object.values(res)[1];
        console.log(token);
        localStorage.setItem('token', token);
      });

    this.usersList.push(user);
  }

  getUsers() {
    this.usersInfo = localStorage.getItem('token') || null;
    this.usersInfo = JSON.parse(this.usersInfo);
    return JSON.stringify(this.usersInfo);
  }

  setUsers(token: string) {
    this.usersInfo = {};
    this.usersInfo = {
      token: token,
    };
    localStorage.setItem('token', JSON.stringify(this.usersInfo));
  }

  loginUser(username: any, password: any) {
    const token = localStorage.getItem('token');
    var params = {
      email: username,
      password: password,
    };
    const bearer = 'Bearer ' + token;
    const headers = {
      Authorization: bearer,
      'Content-Type': 'application/json',
    };

    this.http
      .post<any>('http://localhost:3000/api/users/login', params, {
        headers: headers,
      })
      .subscribe(
        (data) => {
          console.log(data);
          if (data) {
            this.setUsers(data.token);
            window.sessionStorage.setItem('isAuth', 'true');
            this.setToken(data.token);
          }
        },
        (err) => {
          alert('Invalid Credentials');
        }
      );
  }

  logOutUser() {
    this.usersInfo = [];
    localStorage.removeItem('token'); //currentUser
    window.sessionStorage.setItem('isAuth', 'false');
    this.router.navigate(['/userLogin']);
  }

  setToken(token: string) {
    this.token = '';
    this.token = token;
    localStorage.setItem('token', this.token);
  }

  setUser(user: any) {
    console.log(user);
    this.usersInfo = user;
  }
}
