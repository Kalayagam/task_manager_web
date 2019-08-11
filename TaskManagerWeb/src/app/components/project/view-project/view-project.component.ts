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

  searchText: string = null;
  searchBy: string = 'projectName';
  toolbarColumns: any[];
  sortBy: string = 'startDate';
  sortDirection: number = 1;

  constructor() { }

  ngOnInit() {
    this.configureToolbarColumns();
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

  private configureToolbarColumns() {
    this.toolbarColumns = [
      { displayName: 'Start Date', propertyName: 'startDate'},
      { displayName: 'End Date', propertyName: 'endDate'},
      { displayName: 'Priority', propertyName: 'priority'},
      { displayName: 'Completed', propertyName: 'numberOfTasksCompleted'}
    ]
  }

}
