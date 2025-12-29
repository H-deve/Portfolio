import {Component, Inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import emailJs, { EmailJSResponseStatus } from '@emailjs/browser';
import {EmailJsConfig} from '../../token';

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
  // use injector to get emailJsConfig
  constructor(@Inject('EMAILJS_CONFIG') private emailJsConfig: EmailJsConfig) {
  }
  public sendEmail(e: Event): void {

    e.preventDefault();

    emailJs.sendForm(
      this.emailJsConfig.serviceID,
      this.emailJsConfig.templateID,
      e.target as HTMLFormElement,
      {publicKey: this.emailJsConfig.publicKey})
      .then(() => console.log('SUCCESS!'))
      .catch((error: EmailJSResponseStatus) => console.log('FAILED...', error.text));  }

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
