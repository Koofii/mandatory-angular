import { Component, Input } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

  @Input() toggle;

  status = this.utilService.getStatusTypes();
  
  constructor(private utilService: UtilService) {}

}
