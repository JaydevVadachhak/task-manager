import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserTaskService } from 'src/app/service/user-task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent implements OnInit {
  pageHeading: string = 'Update Task';
  tasksList: any;
  currentTask: any = '';
  categories: string[] = ['Work', 'Personal', 'Shopping', 'Health', 'General'];

  constructor(
    private route: ActivatedRoute,
    private userTaskService: UserTaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.params;
    const taskIdParamas = routeParams['taskId'];
    this.userTaskService
      .getCurrentTask(taskIdParamas)
      .subscribe((responseData) => {
        // console.log(responseData);
        this.currentTask = responseData;
        this.updateTaskForm.patchValue({
          description: this.currentTask.description,
          completed: String(this.currentTask.completed),
          category: this.currentTask.category || 'General',
        });
      });
  }

  updateTaskForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.minLength(10)]],
    completed: ['', [Validators.required]],
    category: ['General', [Validators.required]],
  });

  get description() {
    return this.updateTaskForm.get('description');
  }

  get completed() {
    return this.updateTaskForm.get('completed');
  }

  get category() {
    return this.updateTaskForm.get('category');
  }

  onUpdateTask(updateTaskForm: any) {
    if (updateTaskForm.valid) {
      const routeParams = this.route.snapshot.params;
      const taskIdParamas = routeParams['taskId'];
      this.userTaskService.updateTask(updateTaskForm.value, taskIdParamas);
    }
  }
}
