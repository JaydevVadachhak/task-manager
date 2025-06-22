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
  filteredTasksList: any;
  selectedCategory: string = 'All';
  categories: string[] = [
    'All',
    'Work',
    'Personal',
    'Shopping',
    'Health',
    'General',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userTasksService: UserTaskService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.userTasksService.getTask().subscribe((tasks) => {
      this.tasksList = tasks;
      this.filteredTasksList = tasks;
      return tasks;
    });
  }

  addTaskForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.minLength(10)]],
    completed: ['', [Validators.required]],
    category: ['General', [Validators.required]],
  });

  get description() {
    return this.addTaskForm.get('description');
  }

  get completed() {
    return this.addTaskForm.get('completed');
  }

  get category() {
    return this.addTaskForm.get('category');
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
      this.userTasksService.setTask(addTaskForm.value);
      this.loadTasks();
      this.closePopup();
    }
  }

  onDeleteTask(taskId: string) {
    this.userTasksService.deleteTask(taskId);
    alert('Task deleted');
    // this.router.navigate(['/userHome']);
    window.location.reload();
  }

  onMarkCompleted(taskDescription: string, taskId: string, category: string) {
    this.userTasksService.updateCompletedStatus(
      taskDescription,
      taskId,
      category
    );
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredTasksList = this.tasksList;
    } else {
      this.filteredTasksList = this.tasksList.filter(
        (task: any) => task.category === category
      );
    }
  }
}
