import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UtilService } from '../util.service';
import { TaskService } from '../task.service';
import { StatusType } from '../constants';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit, OnDestroy {

  subscription;

  tasks = []
  

  @Input() status

  constructor(private taskService: TaskService) {}

  ngOnInit(){
    let listStatus

    for(let i in StatusType){
      if(StatusType[i] == this.status){
        listStatus = StatusType[i]
      }
    }

    this.subscription = this.taskService.getTasks(listStatus)
    .subscribe(tasks => this.tasks = tasks) //sparar vad vi hämtat till den lokala variabeln
  }  

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  handleStatusChanged($event){
    this.taskService.updateTask($event.id, $event.status)
  }
}
