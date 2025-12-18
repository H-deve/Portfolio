import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ThemeService} from '../../core/services/theme';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  // Navigation smooth scroll
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
