import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {GetDataNow, GetFormatDate,GetTime} from '../utils/data.utils';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  addEvent:FormGroup;
  clock:string;
  constructor() {
    setInterval(()=>this.Clock(),1000)
   }
 

  ngOnInit(): void {
  }
  initialCount:string=GetFormatDate();
  public dataNow:string=GetDataNow();
  Clock(): void {
    this.clock=GetTime();
  }
}

