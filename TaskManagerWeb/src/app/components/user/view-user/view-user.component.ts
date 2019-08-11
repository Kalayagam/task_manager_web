import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  @Input() users: any = [];
  @Input() selectMode: boolean = false;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  searchText: string = null;
  toolbarColumns: any[];
  sortBy: string = 'employeeId';
  sortDirection: number = 1;

  constructor() { }

  ngOnInit() {
    this.configureToolbarColumns();
  }

  
  deleteUser(user) {
    this.delete.emit(user);
  }

  selectUser(user) {
    this.select.emit(user);
  }

  editUser(user) {
    this.edit.emit(user)
  }

  private configureToolbarColumns() {
    this.toolbarColumns = [
      { displayName: 'First Name', propertyName: 'firstName'},
      { displayName: 'Last Name', propertyName: 'lastName'},
      { displayName: 'Id', propertyName: 'employeeId'}
    ]
  }

}
