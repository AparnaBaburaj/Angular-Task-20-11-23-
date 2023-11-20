import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,CoursesComponent,AppComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnChanges{
  @Input() datavalue!:boolean
  public Sname='';
  public name='';

  constructor(public activaterouter: ActivatedRoute){
    console.log("activated router",activaterouter);
    activaterouter.params.subscribe((param:any)=>{
      console.log(param);
      this.Sname=param.Sname;
      this.name=param.name;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes);
  }

}
