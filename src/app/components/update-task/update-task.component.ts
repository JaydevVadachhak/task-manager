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

  constructor(
    private route: ActivatedRoute,
    private userTaskService: UserTaskService,
    private formBuilder: FormBuilder
  ) {}

  updateTaskForm = this.formBuilder.group({
    description: ['', [Validators.required, Validators.minLength(10)]],
    completed: ['', [Validators.required]],
  });

  ngOnInit(): void {
    // this.userTaskService.getTask().subscribe((tasks) => {
    //   console.log(tasks);
    //   this.tasksList = tasks;
    //   return tasks;
    // });
    // this.tasksList.find((task: any) => task._id === taskIdParamas);
    // console.log(this.tasksList);
  }

  get description() {
    return this.updateTaskForm.get('description');
  }

  get completed() {
    return this.updateTaskForm.get('completed');
  }

  onUpdateTask(updateTaskForm: any) {
    if (updateTaskForm.valid) {
      const routeParams = this.route.snapshot.params;
      const taskIdParamas = routeParams['taskId'];
      this.userTaskService.updateTask(updateTaskForm.value, taskIdParamas);
    }
  }
}
