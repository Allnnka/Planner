import { TaskPayload } from "../task/create-task/create-task.payload";

export function GetThisWeekTasks(array:Array<TaskPayload>):Array<TaskPayload>{
    //Get currnet weeks date
    let curr = new Date; 
    let first = curr.getDate() - curr.getDay(); 
    let lastday=new Date;
    lastday.setDate(first + 6)
    
    let firstday = new Date(curr.setDate(first))

    let weeksTask:Array<TaskPayload>=[];

    array.map(task=>{
        task.taskDate=new Date(task.taskDate)
        task.startTask=new Date(task.startTask)
        task.endTask=new Date(task.endTask)
        
        if(task.taskDate>=firstday && task.taskDate<=lastday){
            weeksTask.push(task)
        }
    });
    return weeksTask;
}
