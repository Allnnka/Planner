import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';
import { TaskPayload } from 'src/app/task/create-task/create-task.payload';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {

  @Input() public modalTask:TaskPayload;

  constructor(private modalService: ModalService) {
    this.openModal('task-info-modal');
   }

  ngOnInit(): void {
  }
  public openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}
