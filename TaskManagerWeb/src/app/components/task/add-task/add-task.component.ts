import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManagerServiceService } from "../../../services/task-manager-service.service";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectUserComponent } from '../../user/select-user/select-user.component';
import { SelectProjectComponent } from '../../project/select-project/select-project.component';
import { SelectTaskComponent } from '../select-task/select-task.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() mode: string = 'Add';
  @Input() task: any = {};
  
  selectedParentTask: any = {};
  selectedProject: any = {};
  selectedUser: any = {};

  constructor(private taskManagerServiceService: TaskManagerServiceService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    if(this.mode === 'Add') {
      this.reset();
    } 
  }

  searchParentTask() {
    const modalRef = this.modalService.open(SelectTaskComponent);
    
    modalRef.result.then((parentTask) => {
      this.selectedParentTask = parentTask;
      this.task.parentId = parentTask.id;
    }, () => {});
  }

  searchProject() {
    const modalRef = this.modalService.open(SelectProjectComponent);
    
    modalRef.result.then((project) => {
      this.selectedProject = project;
      this.task.projectId = project.id;
    }, () => {});
  }

  searchUser() {
    const modalRef = this.modalService.open(SelectUserComponent);
    
    modalRef.result.then((user) => {
      this.selectedUser = user;
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

  private goToViewTask(){
    this.reset();
    this.router.navigate(["/task/view"]);
  }

  private reset(){
    this.task = {
      taskName: '',
      parentId: 0,
      priority: 5,
      startDate: '',
      endDate: '',
      isParentTask: false;
    }
  } 
}
