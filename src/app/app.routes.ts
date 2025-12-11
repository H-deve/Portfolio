import { Routes } from '@angular/router';
import {Skills} from './components/skills/skills';
import {Experience} from './components/experience/experience';
import {About} from './components/about/about';
import {Home} from './components/home/home';
import {Projects} from './components/projects/projects';
import {Contact} from './components/contact/contact';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'experiences', component: Experience ,  },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // Redirection vers la home pour les routes non trouvées
];


