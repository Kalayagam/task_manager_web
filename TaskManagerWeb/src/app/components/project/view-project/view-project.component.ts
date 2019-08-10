import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  @Input() projects: any = [];
  @Input() selectMode: boolean = false;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();  
  @Output() select: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  selectProject(project) {
    this.select.emit(project);
  }

  editProject(project) {
    this.edit.emit(project);
  }

  deleteProject(project) {
    this.delete.emit(project);
  }

}
