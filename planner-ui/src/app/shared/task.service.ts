import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskPayload } from '../task/create-task/create-task.payload';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) { }

  createTask(taskPayload:TaskPayload):Observable<any>{
    return this.http.post('http://localhost:8080/api/tasks/',taskPayload);
  }
  getAllTasks():Observable<any>{
    return this.http.get('http://localhost:8080/api/tasks/')
  }
  deleteTask(id:number){
    return this.http.post('http://localhost:8080/api/tasks/delete',id);
  }

}
