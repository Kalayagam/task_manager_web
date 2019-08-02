import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiServiceService: ApiServiceService) { }

  private readonly userUrl: string = "user";

  getAll(){
    return this.apiServiceService.GET(this.userUrl);
  }

  save(user){
    return this.apiServiceService.POST(this.userUrl, user);
  }

  edit(user){
    return this.apiServiceService.PUT(this.userUrl, user);
  }

  delete(id){
    return this.apiServiceService.DELETE(this.userUrl, id);
  }
}
