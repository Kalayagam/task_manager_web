import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() user: any;
  @Input() mode: string = 'Add';
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    if(this.mode === 'Add') {
      this.reset();
    }
  } 

  saveUser() {
    if(this.mode === 'Add') {
      this.userService.save(this.user).subscribe(
        (response: [{}]) => {
          this.add.emit()
        }
      );
    } else {
      this.userService.save(this.user).subscribe(
        (response: [{}]) => {
          this.edit.emit();
        }
      );
    }
  }

  reset() {
    this.user = {
      firstName: '',
      lastName: '',
      employeeId: ''
    };
  }
}
