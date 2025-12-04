import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/alexmorgan' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/alexmorgan' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com/alexmorgan' },
    { icon: 'fab fa-dribbble', url: 'https://dribbble.com/alexmorgan' }
  ];

  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];
}
