import { Component, OnInit, Input } from '@angular/core';
import { TaskManagerServiceService } from 'src/app/services/task-manager-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.css']
})
export class SelectTaskComponent implements OnInit {

  @Input() tasks: any;
  constructor(private taskManagerServiceService: TaskManagerServiceService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.loadTasks();
  }

  private loadTasks(){
    this.taskManagerServiceService.getAllParentTask().subscribe(
      (response: [{}]) => {
        this.tasks = response;
      }
    );
  }

}
