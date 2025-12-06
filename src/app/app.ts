import { Component, signal } from '@angular/core';
import {Footer} from './components/layout/footer/footer';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './components/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Footer,RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
