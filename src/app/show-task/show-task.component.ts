import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent  implements OnInit{
  constructor(private task:TaskService){ }

  tasks: string[] = ['task 1', 'task 2', 'task 3']


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.task.CreateTask.subscribe((value)=>{
      console.log(value);
      this.tasks.push(value)
    })

  }
}
