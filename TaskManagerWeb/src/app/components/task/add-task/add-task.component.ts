import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TaskManagerServiceService } from "../../../services/task-manager-service.service";
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SelectUserComponent } from '../../user/select-user/select-user.component';
import { SelectProjectComponent } from '../../project/select-project/select-project.component';
import { SelectTaskComponent } from '../select-task/select-task.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddTaskComponent implements OnInit {
  @Input() set mode(value) {
    this._mode = value;
    this.initializeMode(value);
  };
  @Input() task: any = {};  
  
  modalOptions: NgbModalOptions = {
    windowClass: 'modal-medium'
  }
  submitBtnText: string = 'Add'
  resetBtnText: string = 'Reset';
  private _mode: string;

  get mode() {
    return this._mode;
  }

  constructor(private taskManagerServiceService: TaskManagerServiceService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {    
   this.initializeMode(this.mode);
  }

  searchParentTask() {
    const modalRef = this.modalService.open(SelectTaskComponent, this.modalOptions);
    
    modalRef.result.then((parentTask) => {
      this.task.parentTaskName = parentTask.taskName;
      this.task.parentId = parentTask.id;
    }, () => {});
  }

  searchProject() {
    const modalRef = this.modalService.open(SelectProjectComponent, this.modalOptions);
    
    modalRef.result.then((project) => {
      this.task.projectName = project.projectName;
      this.task.projectId = project.id;
    }, () => {});
  }

  searchUser() {
    const modalRef = this.modalService.open(SelectUserComponent, this.modalOptions);
    
    modalRef.result.then((user) => {
      this.task.userName = `${user.firstName} ${user.lastName}`;
      this.task.userId = user.id;
    }, () => {});
  }

  saveTask(){
    if(this.mode === 'Add') {
      this.taskManagerServiceService.saveTask(this.task).subscribe(
        () => {
          this.goToViewTask();
        }
      );
    } else {
      this.taskManagerServiceService.editTask(this.task).subscribe(
        () => {
          this.goToViewTask();
        }
      );
    }   
  }

  cancel() {
    if (!this.mode || this.mode == 'Add') {
      this.reset();
    } else {
      this.goToViewTask();
    }
  }

  private goToViewTask(){
    this.initializeMode('Add');
    this.router.navigate(["/task/view"]);
  }

  private reset(){
    this.task = {
      taskName: '',
      parentId: 0,
      priority: 5,
      startDate: '',
      endDate: '',
      isParentTask: false
    }
  } 

  private initializeMode(value: any) {
    if (!value || value == 'Add') {
      this.reset();
      this.resetBtnText = 'Reset';
      this.submitBtnText = 'Add';
      this.taskManagerServiceService.selectedTask = {};
    }
    else {
      this.submitBtnText = 'Update';
      this.resetBtnText = 'Cancel';
      if(this.taskManagerServiceService.selectedTask) {
        this.task = this.taskManagerServiceService.selectedTask;
      }
    }
  }
}
