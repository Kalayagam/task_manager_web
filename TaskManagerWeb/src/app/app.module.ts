import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { SearchFilter } from './pipes/search-filter';

import { ApiServiceService } from './services/api-service.service'
import { TaskManagerServiceService } from './services/task-manager-service.service';
import { NavBarComponent } from './components/core/nav-bar/nav-bar.component';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';
import { TaskComponent } from './components/task/task.component';
import { ViewTaskComponent } from './components/task/view-task/view-task.component'

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    AddTaskComponent,
    SearchFilter,
    NavBarComponent,
    ProjectComponent,
    UserComponent,
    TaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ApiServiceService,
    TaskManagerServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
