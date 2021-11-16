import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/shared/task.service';
import { TaskPayload } from '../create-task/create-task.payload';
import {MatTableDataSource} from '@angular/material/table';
import { faTrashRestore } from '@fortawesome/free-solid-svg-icons';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { throwError } from 'rxjs';
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
  constructor(private taskService:TaskService,private router:Router,private liveAnnouncer: LiveAnnouncer) { 
    this.taskService.getAllTasks().subscribe(task=>{
      this.tasks=task;
      this.dataSource = new MatTableDataSource(this.tasks);
      console.log(this.dataSource);
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }
  DeleteTask(id:number){
      this.taskService.deleteTask(id).subscribe(()=>{
        console.log("Post "+id +". Delete Successfully!!!" );
        window.location.reload();
      },error=>{
        throwError(error);
      })
  }
  

}
