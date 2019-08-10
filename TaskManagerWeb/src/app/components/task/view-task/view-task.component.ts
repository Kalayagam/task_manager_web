import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManagerServiceService } from 'src/app/services/task-manager-service.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  @Input() tasks: any;
  @Input() selectMode: boolean = false;
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private taskManagerServiceService: TaskManagerServiceService) { }

  ngOnInit() {
    this.loadTasks();
  }  

  selectTask(task) {
    this.select.emit(task);
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
