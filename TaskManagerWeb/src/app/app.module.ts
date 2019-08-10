import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ViewProjectComponent } from './components/project/view-project/view-project.component';
import { ProjectService } from './services/project.service';
import { ViewUserComponent } from './components/user/view-user/view-user.component';
import { UserService } from './services/user.service';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import { ModalComponent } from './components/core/modal/modal.component';
import { SelectUserComponent } from './components/user/select-user/select-user.component';

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
    ViewTaskComponent,
    ViewProjectComponent,
    ViewUserComponent,
    AddUserComponent,
    AddProjectComponent,
    ModalComponent,
    SelectUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    ApiServiceService,
    TaskManagerServiceService,
    ProjectService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SelectUserComponent
  ]
})
export class AppModule { }
