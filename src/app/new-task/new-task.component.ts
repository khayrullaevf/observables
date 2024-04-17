import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  constructor(private task:TaskService){

  }
  newTask:string=''

  onCreateTask(){
    this.task.onCreateTask(this.newTask)
  }

}
