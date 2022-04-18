import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserTaskService {
  private url = 'http://localhost:3000/api/tasks';
  task: any;
  tasksList = [{}];

  constructor(private http: HttpClient) {}

  setTask(addTaskForm: any) {
    const token = localStorage.getItem('token');

    let new_task = {
      description: addTaskForm.description,
      completed: addTaskForm.completed,
    };

    const bearer = 'Bearer ' + token;
    const headers = {
      Authorization: bearer,
      'Content-Type': 'application/json',
    };

    this.task = this.http
      .post('http://localhost:3000/api/tasks', JSON.stringify(new_task), {
        headers: headers,
      })
      .subscribe((res) => {
        console.log(res);
      });

    this.tasksList.push(this.task);
    // console.log(this.tasksList);
  }

  getTask() {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const headers = {
      Authorization: bearer,
      'Content-Type': 'application/json',
    };
    return this.http.get(this.url, { headers: headers }).pipe(
      map((responseData: any) => {
        const studentArray = [];
        let key: any;
        for (key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            studentArray.push({ ...responseData[key], id: key });
          }
        }
        return studentArray;
      })
    );
    // .subscribe((responseData) => {
    //   console.log(responseData);
    // });
  }
}
