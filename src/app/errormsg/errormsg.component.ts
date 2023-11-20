import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-errormsg',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './errormsg.component.html',
  styleUrl: './errormsg.component.scss'
})
export class ErrormsgComponent {

}
