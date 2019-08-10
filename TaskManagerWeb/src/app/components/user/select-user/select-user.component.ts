import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {
  users: any = [];
  constructor(private userService: UserService,
               public activeModal: NgbActiveModal) { }

  ngOnInit() {
      this.loadUsers();
  }  

  private loadUsers() {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
    });
  }
}
