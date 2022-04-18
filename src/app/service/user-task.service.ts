import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserTaskService {
  private url = 'http://localhost:3000/api/tasks/';

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {}
}
