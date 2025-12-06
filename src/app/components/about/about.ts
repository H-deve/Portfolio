import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Happy Clients' },
    { value: '100%', label: 'Satisfaction Rate' }
  ];
}
