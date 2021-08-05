import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { TaskService } from 'src/app/shared/task.service';
import { GetDataNow } from 'src/app/utils/data.utils';
import { CreateTaskPayload } from './create-task.payload';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss','../../../scss/_main.scss']
})
export class CreateTaskComponent implements OnInit {

  createTaskForm:FormGroup;
  taskPayload:CreateTaskPayload;
  dataNow:string;
  constructor(private router:Router, private taskService:TaskService) { 
    this.taskPayload={
      taskDate:null,
      startTask:null,
      endTask:null,
      title:'',
      description:'',
      priority:''
    }
    console.log(this.taskPayload.taskDate);
    this.dataNow=GetDataNow();
  }
  
  ngOnInit(): void {
    this.createTaskForm = new FormGroup({
      taskDate:new FormControl('',Validators.required),
      startTask:new FormControl('',Validators.required),
      endTask:new FormControl('',Validators.required),
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      priority:new FormControl('',Validators.required)
    });
  }
  createTask(){
    this.taskPayload.taskDate=new Date(this.createTaskForm.get('taskDate').value);
    this.taskPayload.startTask= this.createTaskForm.get('startTask').value;
    this.taskPayload.endTask= this.createTaskForm.get('endTask').value;
    this.taskPayload.title= this.createTaskForm.get('title').value;
    this.taskPayload.description= this.createTaskForm.get('description').value;
    this.taskPayload.priority= this.createTaskForm.get('priority').value;
    this.taskService.createPost(this.taskPayload).subscribe(()=>{
      console.log("Post Create Successfully!!!");
    },error=>{
      throwError(error);
    })
  }

}
