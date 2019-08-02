import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  @Input() projects: any = [];
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editProject(project) {
    this.edit.emit(project);
  }

  deleteProject(project) {
    this.delete.emit(project);
  }

}
