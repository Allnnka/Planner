import { Time } from "@angular/common";

export class CreateTaskPayload{
    taskDate:Date;
    startTask:String;
    endTask:String;
    title:string;
    description?:string;
    priority?:string;
}