import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {

  constructor(private taskService: TaskService) {}

  createTask(title, description){
    this.taskService.addTask(title, description)
  }

}
