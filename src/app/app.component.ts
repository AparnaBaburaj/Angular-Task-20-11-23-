import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';

   


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task';


  constructor(public router:Router){

  }
  courseclick(courses:string){
    this.router.navigate(['courses',courses])
  }
}
