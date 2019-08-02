import { Component, OnInit, Input } from '@angular/core';
import { TaskManagerServiceService } from 'src/app/services/task-manager-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskList: any;
  constructor(private taskManagerServiceService: TaskManagerServiceService) { }

  ngOnInit() {
    this.loadTaskList();
  }

  loadTaskList(){
    this.taskManagerServiceService.getAllParentTask().subscribe(
      (response: [{}]) => {
        this.taskList = response;
      }
    );
  }
}
