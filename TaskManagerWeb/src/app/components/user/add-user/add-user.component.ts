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
  @Input() set mode(value) {
    this.initializeMode(value);
  };
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();

  submitBtnText: string = 'Add'
  showResetButton: boolean = true;
  constructor(private userService: UserService) { }  

  ngOnInit() {
    this.initializeMode(this.mode);
  } 

  saveUser() {
    if(this.mode == 'Add') {
      this.userService.save(this.user).subscribe(
        (response: [{}]) => {
          this.add.emit()
        }
      );
    } else {
      this.userService.edit(this.user).subscribe(
        (response: [{}]) => {
          this.edit.emit();
        }
      );
    }
  }

  private reset() {
    this.user = {
      firstName: '',
      lastName: '',
      employeeId: ''
    };
  }

  private initializeMode(value: any) {
    if (!value || value == 'Add') {
      this.reset();
      this.showResetButton = true;
      this.submitBtnText = 'Add';
    }
    else {
      this.submitBtnText = 'Update';
      this.showResetButton = false;
    }
  }
}
