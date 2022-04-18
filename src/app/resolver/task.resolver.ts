import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { UserTaskService } from '../service/user-task.service';

@Injectable({
  providedIn: 'root',
})
export class TaskResolver implements Resolve<boolean> {
  constructor(private userTaskService: UserTaskService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.userTaskService.getTask().subscribe(
      (tasks) => {
        console.log(tasks);
        return of(tasks);
      },
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
