import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TaskManagerServiceService } from 'src/app/services/task-manager-service.service';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SelectProjectComponent } from '../../project/select-project/select-project.component';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewTaskComponent implements OnInit {

  @Input() tasks: any;
  @Input() selectMode: boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  searchText: string = null;
  searchBy: string = 'projectName';
  toolbarColumns: any[];
  sortBy: string = 'startDate';
  sortDirection: number = 1;
  modalOptions: NgbModalOptions = {
    windowClass: 'modal-medium'
  }
  
  constructor(private taskManagerServiceService: TaskManagerServiceService,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    if(!this.selectMode) {
      this.loadTasks();
    }    
    this.configureToolbarColumns();
  }  

  selectTask(task) {
    this.select.emit(task);
  }

  endTask(task) {
    task.status = 1;
    this.taskManagerServiceService.editTask(task).subscribe(
      () => {
        this.loadTasks();
      }
    );
  }

  editTask(task) {
    this.taskManagerServiceService.selectedTask = task;  
    this.router.navigate(["/task"], { queryParams: { mode: 'edit' } });  
  }

  deleteTask(task){
    this.taskManagerServiceService.deleteTask(task.id).subscribe(
      (response: [{}]) => {
        this.loadTasks();
      }
    );
  }

  loadTasks(){
    this.taskManagerServiceService.getAllTask().subscribe(
      (response: [{}]) => {
        this.tasks = response;
      }
    );
  }

  searchProject() {
    const modalRef = this.modalService.open(SelectProjectComponent, this.modalOptions);
    
    modalRef.result.then((project) => {
      this.searchText = project.projectName;
    }, () => {});
  }

  private configureToolbarColumns() {
    this.toolbarColumns = [
      { displayName: 'Start Date', propertyName: 'startDate'},
      { displayName: 'End Date', propertyName: 'endDate'},
      { displayName: 'Priority', propertyName: 'priority'},
      { displayName: 'Completed', propertyName: 'status'}
    ]
  }

}
