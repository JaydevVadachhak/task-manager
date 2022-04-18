import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { UserTaskService } from 'src/app/service/user-task.service';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tasksList: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userTasksService: UserTaskService
  ) {}

  ngOnInit(): void {}

  addTaskForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.minLength(10)]],
    completed: ['', [Validators.required]],
  });

  get description() {
    return this.addTaskForm.get('description');
  }

  get completed() {
    return this.addTaskForm.get('completed');
  }

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  onAddTask(addTaskForm: any) {
    if (addTaskForm.valid) {
      // this.userTasksService.createTask(addTaskForm.value);
      // this.tasksList = this.userTasksService.getAllTasks();
      this.closePopup();
    }
  }
}
