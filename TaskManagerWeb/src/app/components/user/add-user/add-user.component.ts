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
    this._mode = value;
    this.initializeMode(value);
  };
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() discard: EventEmitter<any> = new EventEmitter<any>();

  submitBtnText: string = 'Add'
  resetBtnText: string = 'Reset';
  private _mode: string;

  get mode() {
    return this._mode;
  }

  constructor(private userService: UserService) { }  

  ngOnInit() {
    this.initializeMode(this.mode);
  } 

  saveUser() {
    if(this.mode == 'Add') {
      this.userService.save(this.user).subscribe(
        (response: [{}]) => {
          this.add.emit();
          this.initializeMode('Add');
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

  cancel() {
    this.discard.emit();
    this.initializeMode('Add');
  }
  
  private initializeMode(value: any) {
    if (!value || value == 'Add') {
      this.reset();
      this.resetBtnText = 'Reset';
      this.submitBtnText = 'Add';
    }
    else {
      this.submitBtnText = 'Update';
      this.resetBtnText = 'Cancel';
    }
  }

  private reset() {
    this.user = {
      firstName: '',
      lastName: '',
      employeeId: ''
    };
  }

}
