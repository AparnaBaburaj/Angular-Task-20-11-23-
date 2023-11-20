import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrormsgComponent } from './errormsg/errormsg.component';
import { Routes } from '@angular/router';  

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:AboutComponent,
        path:'About'
    },
    {
        component:CoursesComponent,
        path:'courses'
    },
    {
        component:CoursesComponent,
        path:'courses/:Sname'
    },
    {

        path:'**',
        component:ErrormsgComponent
    },

];

 