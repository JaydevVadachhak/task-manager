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
  task: any;
  tasksList = [{}];

  constructor(private http: HttpClient, private router: Router) {}

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
        const userTasksArray = [];
        let key: any;
        for (key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            userTasksArray.push({ ...responseData[key], id: key });
          }
        }
        return userTasksArray;
      })
    );
    // .subscribe((responseData) => {
    //   console.log(responseData);
    // });
  }

  deleteTask(taskId: string) {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;
    const headers = {
      Authorization: bearer,
      'Content-Type': 'application/json',
    };
    return this.http.delete(this.url + taskId, { headers: headers }).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
        console.log('Invalid Credentials');
      },
    });
  }

  updateTask(updateTaskForm: any, taskId: string) {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;

    const params = {
      description: updateTaskForm.description,
      completed: updateTaskForm.completed,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    this.http
      .patch<any>(this.url + taskId, params, {
        headers: headers,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/userHome']);
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }

  updateCompletedStatus(taskDescription: string, taskId: string) {
    const token = localStorage.getItem('token');
    const bearer = 'Bearer ' + token;

    const params = {
      description: taskDescription,
      completed: true,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: bearer,
    });

    this.http
      .patch<any>(this.url + taskId, params, {
        headers: headers,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          // this.router.navigate(['/userHome']);
          window.location.reload();
        },
        error: (error) => {
          console.error('There was an error!', error);
          console.log('Invalid Credentials');
        },
      });
  }
}
