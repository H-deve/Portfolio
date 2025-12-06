import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {Navbar} from '../navbar/navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  get headerClasses(): string {
    return this.isScrolled
      ? 'bg-background/95 backdrop-blur-md border-b border-border'
      : 'bg-transparent';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
