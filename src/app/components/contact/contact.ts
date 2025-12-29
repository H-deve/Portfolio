import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';

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
  public sendEmail(e: Event): void {

    e.preventDefault();

    emailJs.sendForm('service_o2sbbh7', 'template_78zumlo', e.target as HTMLFormElement, {
      publicKey: 'IOLcyx66KBQBmqUy_',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );

  }
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
