import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: any = [];
  selectedProject: any = {};
  mode: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
    this.resetMode();
  }

  addProject() {
    this.loadProjects();
    this.resetMode();
  }

  deleteProject(project) {
    this.projectService.delete(project.id).subscribe(
      () => {
        this.loadProjects();
      }
    );
  }

  editProject(project) {
    this.selectedProject = project;
    this.mode = 'edit';
  }

  discard() {
    this.mode = 'Add';
    this.selectedProject = {}
  }

  successEdit() {
    this.loadProjects();
    this.resetMode();
  }

  private resetMode() {
    this.mode = 'Add';
  }
  
  private loadProjects() {
    this.projectService.getAll().subscribe((response: [{}]) => {
      this.projects = response;
    });
  }

}
