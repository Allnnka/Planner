import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/shared/auth.service';
import {GetDataNow, GetFormatDate,GetTime} from '../utils/data.utils';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  clock:string;
  auth:AuthService;
  constructor(auth:AuthService, private router:Router) {
    this.auth=auth;
    setInterval(()=>this.Clock(),1000);
   }
 

  ngOnInit(): void {
  }
  initialCount:string=GetFormatDate();
  Clock(): void {
    this.clock=GetTime();
  }
  GetAllTasks(){
    this.router.navigateByUrl('/planner/get_all_tasks');
  }
}


