import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManagerServiceService } from 'src/app/services/task-manager-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  @Input() tasks: any;
  @Input() selectMode: boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private taskManagerServiceService: TaskManagerServiceService,
              private router: Router) { }

  ngOnInit() {
    this.loadTasks();
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

}
