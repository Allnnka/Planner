import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';
import { TaskPayload } from '../create-task/create-task.payload';
import {MatTableDataSource} from '@angular/material/table';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-get-all-task',
  templateUrl: './get-all-task.component.html',
  styleUrls: ['./get-all-task.component.scss','../../../scss/_main.scss']
})
export class GetAllTaskComponent implements OnInit {

  faTresh=faTrashRestore;
  tasks:Array<TaskPayload>=[];
  dataSource:MatTableDataSource<TaskPayload>;
  displayedColumns: string[] = ['taskDate', 'startTask', 'endTask', 'title','description','priority','delete'];
  constructor(private taskService:TaskService,private router:Router) { 
    this.taskService.getAllTasks().subscribe(task=>{
      this.tasks=task;
      this.dataSource = new MatTableDataSource(this.tasks);
      console.log(this.dataSource);
    });
  }


  ngOnInit(): void {

  }

}
