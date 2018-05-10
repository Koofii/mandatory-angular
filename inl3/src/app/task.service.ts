import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {
  
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

   getTasks(status: StatusType): Observable<Task[]> {
     // return an observable of a task array, filtered by the passed in status..
     // assuming this.subject exists...
    return this.subject.asObservable()
    .map(tasks => tasks.filter(task => task.status === status));
   }

  private taskId = 0; //taskId startvärde
  private tasks: Task[] =[];  //tasks ska reflektera interfacet Task


  subject = new BehaviorSubject([])
  
  

  updateTask(id: number, status: StatusType) {
    this.tasks.map( task =>  task.id === id ? task.status = status : task)
    console.log(this.tasks)
    this.updateSubscribers();
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
    this.tasks.push(
      {
        id: ++this.taskId,
        status: StatusType.NotStarted, //kommer från constants
        title: title,
        description: description,
      });
    console.log(this.tasks);
    this.updateSubscribers();
  }
  updateSubscribers(){
    this.subject.next(this.tasks);
  }
}
