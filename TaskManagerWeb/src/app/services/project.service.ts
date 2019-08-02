import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable()
export class ProjectService {

  constructor(private apiServiceService: ApiServiceService) { }

  private readonly projectUrl: string = "project";

  getAll(){
    return this.apiServiceService.GET(this.projectUrl);
  }

  save(project){
    return this.apiServiceService.POST(this.projectUrl, project);
  }

  edit(project){
    return this.apiServiceService.PUT(this.projectUrl, project);
  }

  delete(id){
    return this.apiServiceService.DELETE(this.projectUrl, id);
  }
}
