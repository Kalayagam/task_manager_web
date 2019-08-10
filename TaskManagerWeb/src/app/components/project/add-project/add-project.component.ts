import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/services/project.service';
import { SelectUserComponent } from '../../user/select-user/select-user.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit { 

  @Input() project: any;
  @Input() mode: string = 'Add';
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  selectedUser: any = {};

  constructor(private projectService: ProjectService,
              private modalService: NgbModal) { }

  ngOnInit() {
    if(this.mode === 'Add') {
      this.reset();
    }
  } 

  searchUser() {
    const modalRef = this.modalService.open(SelectUserComponent);
    
    modalRef.result.then((user) => {
      this.selectedUser = user;
      this.project.userId = user.id;
    }, () => {});
  }

  saveProject() {
    if(this.mode === 'Add') {
      this.projectService.save(this.project).subscribe(
        (response: [{}]) => {
          this.add.emit()
        }
      );
    } else {
      this.projectService.save(this.project).subscribe(
        (response: [{}]) => {
          this.edit.emit();
        }
      );
    }
  }

  reset() {
    this.project = {
      projectName: '',
      priority: 5,
      userId: '',
      startDate: null,
      endDate: null
    };
    this.selectedUser = {};
  }

}
