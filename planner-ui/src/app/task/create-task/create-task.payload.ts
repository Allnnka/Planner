import { Time } from "@angular/common";

export class CreateTaskPayload{
    taskDate:Date;
    startTask:Date;
    endTask:Date;
    title:string;
    description?:string;
    priority?:string;
}