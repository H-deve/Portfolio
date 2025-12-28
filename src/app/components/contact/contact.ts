import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule ,CommonModule ,RouterModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  socialLinks = [
    {
      icon: 'fab fa-github',
      name: 'GitHub',
      url: 'https://github.com/H-deve'
    },
    {
      icon: 'fab fa-linkedin',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/moatasm-hajjo/'
    },
  ];

}
