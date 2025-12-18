import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private isDark = false;

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme() {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    // Apply to DOM
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(this.THEME_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem(this.THEME_KEY, 'light');
    }

    return this.isDark;
  }

  isDarkMode(): boolean {
    return this.isDark;
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.isDark ? 'dark' : 'light';
  }
}
