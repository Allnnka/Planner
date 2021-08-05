import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTaskPayload } from '../task/create-task/create-task.payload';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http:HttpClient) { }

  createPost(taskPayload:CreateTaskPayload):Observable<any>{
    return this.http.post('http://localhost:8080/api/tasks/',taskPayload);
  }
  
}
