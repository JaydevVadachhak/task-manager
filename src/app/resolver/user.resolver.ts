import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserProfileService } from '../service/user-profile.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  private url = 'http://localhost:3000/api/users/me';
  constructor(
    private http: HttpClient,
    private userProfileService: UserProfileService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.userProfileService.getCurrentUserData().subscribe((data) => {
      // console.log(this.currentUser);
      return of(data);
    });
  }
}
