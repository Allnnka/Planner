import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTaskComponent } from './get-all-task.component';

describe('GetAllTaskComponent', () => {
  let component: GetAllTaskComponent;
  let fixture: ComponentFixture<GetAllTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
