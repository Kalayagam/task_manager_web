import { Component, OnInit, Input } from '@angular/core';
import { TaskManagerServiceService } from 'src/app/services/task-manager-service.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  @Input() taskList: any;
  constructor(private taskManagerServiceService: TaskManagerServiceService) { }

  ngOnInit() {
    this.loadTaskList();
  }

  loadTaskList(){
    this.taskManagerServiceService.getAllTask().subscribe(
      (response: [{}]) => {
        this.taskList = response;
      }
    );
  }

  deleteTask(task){
    this.taskManagerServiceService.deleteTask(task.id).subscribe(
      (response: [{}]) => {
        this.loadTaskList();
      }
    );
  }

}
