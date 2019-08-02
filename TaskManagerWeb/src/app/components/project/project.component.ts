import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: any = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.loadProjects();
  }

  private loadProjects() {
    this.projectService.getAll().subscribe((response: [{}]) => {
      this.projects = response;
    });
  }

  deleteProject(project) {
    this.projectService.delete(project.id).subscribe(
      () => {
        this.loadProjects();
      }
    );
  }

}
