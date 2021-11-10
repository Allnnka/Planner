import { Time } from "@angular/common";

export class TaskPayload{
    taskDate:Date;
    startTask:Date;
    endTask:Date;
    title:string;
    description?:string;
    priority?:string;
    taskId?:number;
    
}