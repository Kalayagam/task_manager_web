import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {

  projects: any = [];
  constructor(private projectService: ProjectService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.loadProjects();
  }

  private loadProjects() {
    this.projectService.getAll().subscribe((response: [{}]) => {
      this.projects = response;
    });
  }

}
