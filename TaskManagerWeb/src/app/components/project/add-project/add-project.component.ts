import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/services/project.service';
import { SelectUserComponent } from '../../user/select-user/select-user.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddProjectComponent implements OnInit { 

  @Input() project: any;
  @Input() set mode(value) {
    this._mode = value;
    this.initializeMode(value);
  };  
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();  
  @Output() discard: EventEmitter<any> = new EventEmitter<any>();

  selectedUser: any = {};
  submitBtnText: string = 'Add'
  resetBtnText: string = 'Reset';
  showDateRange: boolean = false;
  modalOptions: NgbModalOptions = {
    windowClass: 'modal-medium'
  }
  private _mode: string;

  get mode() {
    return this._mode;
  }

  constructor(private projectService: ProjectService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.initializeMode(this.mode);
  } 

  searchUser() {
    const modalRef = this.modalService.open(SelectUserComponent, this.modalOptions);
    
    modalRef.result.then((user) => {
      this.project.userName = `${user.firstName} ${user.lastName}`;
      this.project.userId = user.id;
    }, () => {});
  }

  saveProject() {
    if(this.mode == 'Add') {
      this.projectService.save(this.project).subscribe(
        (response: [{}]) => {
          this.add.emit();
          this.initializeMode('Add');
        }
      );
    } else {
      this.projectService.edit(this.project).subscribe(
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

  reset() {
    this.project = {
      projectName: '',
      priority: 5,
      userId: '',
      startDate: null,
      endDate: null
    };
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

}
