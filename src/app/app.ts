import { Component, signal } from '@angular/core';
import {Footer} from './components/layout/footer/footer';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Header} from './components/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Footer, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  protected readonly title = signal('portfolio');

  constructor(private readonly router: Router) {
    this.router.events.subscribe((event) => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 5)

    })
  }
}
