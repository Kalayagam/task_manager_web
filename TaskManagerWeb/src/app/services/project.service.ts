import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable()
export class ProjectService {

  constructor(private apiServiceService: ApiServiceService) { }

  private readonly projectUrl: string = "project";

  getAll(){
    return this.apiServiceService.GET(this.projectUrl);
  }

  save(task){
    return this.apiServiceService.POST(this.projectUrl, task);
  }

  edit(task){
    return this.apiServiceService.PUT(this.projectUrl, task);
  }

  delete(id){
    return this.apiServiceService.DELETE(this.projectUrl, id);
  }
}
