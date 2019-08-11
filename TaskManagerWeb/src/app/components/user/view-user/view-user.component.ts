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

  constructor() { }

  ngOnInit() {
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

}
