import {Component, HostListener} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLinkActive, RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLinkActive ,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 20;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Close menu when clicking outside on mobile
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('nav') && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  // Close menu on escape key
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
