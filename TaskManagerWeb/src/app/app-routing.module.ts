import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { ViewTaskComponent } from './components/task/view-task/view-task.component';

const appRoutes: Routes = [
    { path: '', component: TaskManagerComponent },    
    { path: 'project', component: ProjectComponent},
    { 
        path: 'task', 
        children: [            
            { path: '', component: TaskComponent },
            { path: 'view', component: ViewTaskComponent },
            
        ]
    },
    { path: 'user', component: UserComponent},
    { path: '**', redirectTo: '' } // Default Routes and should be in the last position  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }