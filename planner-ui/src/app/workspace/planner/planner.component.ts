import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';
import { TaskPayload } from 'src/app/task/create-task/create-task.payload';
import { GetThisWeekTasks } from 'src/app/utils/data.this.week';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  tasks:Array<TaskPayload>=[];
  weekTasks:Array<TaskPayload>=[];
  colorArray:Array<string>=[];
  numOfOurs:Array<number>=[];
  numOfDays:Array<number>=[];
  modalTask:TaskPayload;
  color:string="rgb(255,255,46)"
  constructor(private taskService:TaskService,private router:Router) { 
    this.taskService.getAllTasks().subscribe(task=>{
        this.tasks=task;
        this.GetTaskForThisWeek()
    });
  }
  
  GetTaskForThisWeek(){
    this.weekTasks=GetThisWeekTasks(this.tasks);
    console.log(this.weekTasks);
    for (let i = 8; i <= 19; i++) {
      this.numOfOurs.push(i)
    }
    for (let i = 1; i <= 5; i++) {
      this.numOfDays.push(i)
    }
    for(let i =0; i<this.weekTasks.length;i++){
      this.colorArray.push(this.randomColor());
    }
  }
  ngOnInit(): void {

  }
  randomColor(){
    return 'hsl(240, '+(Math.floor(Math.random()*100))+'%, '+(Math.floor(Math.random()*100))+'%)';
  }
}
