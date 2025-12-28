import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ThemeService} from '../../core/services/theme';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // add theme service
    constructor(private themeService: ThemeService) {
    }

}
