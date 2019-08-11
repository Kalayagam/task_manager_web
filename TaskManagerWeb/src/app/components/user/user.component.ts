import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any = [];
  selectedUser: any = {};
  mode: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loadUsers();
      this.resetMode();
  }

  private loadUsers() {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
    });
  }

  deleteUser(user) {
    this.userService.delete(user.id).subscribe(() => {
      this.loadUsers();
   })
  }

  editUser(user) {
    this.selectedUser = user;
    this.mode = 'edit';
  }

  discard() {
    this.mode = 'Add';
    this.selectedUser = {}
  }

  successAdd() {
    this.loadUsers();
  }

  successEdit() {
    this.loadUsers();
    this.resetMode();
  }

  private resetMode() {
    this.mode = 'Add';
  }
}
