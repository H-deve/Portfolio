import { Component, signal } from '@angular/core';
import {Hero} from './components/hero/hero';
import {About} from './components/about/about';
import {Skills} from './components/skills/skills';
import {Projects} from './components/projects/projects';
import {Experience} from './components/experience/experience';
import {Contact} from './components/contact/contact';
import {Footer} from './components/layout/footer/footer';
import {Header} from './components/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Skills, Projects, Experience, Contact, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
