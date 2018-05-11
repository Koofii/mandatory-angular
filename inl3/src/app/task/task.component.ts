import { Component, OnInit, OnDestroy, Input, EventEmitter, Output} from '@angular/core';
import { TaskService } from '../task.service';
import { StatusType } from '../constants';
import { UtilService } from '../util.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task;
  @Output() statusChanged = new EventEmitter();

  statusTypes = this.utilService.getStatusTypes();

  constructor(private utilService: UtilService) {}
  
  handleStatusChanged(status){
    this.task.status = status
    this.statusChanged.emit(this.task)
  }
}  
