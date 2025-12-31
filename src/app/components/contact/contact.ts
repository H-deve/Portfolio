import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EMAILJS_CONFIG,} from '../../token';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule, CommonModule, RouterModule, ReactiveFormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact{
  // Create the form group first
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  private emailJsConfig = inject(EMAILJS_CONFIG);

  public sendEmail(e: Event): void {
    e.preventDefault();

    // Prevent submission if form is invalid
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Get current time
    const now = new Date();
    const timeString = now.toLocaleString('fr-FR', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // Prepare template parameters
    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      time: timeString // Add the time parameter
    };

    // Send email using EmailJS
    emailjs.send(
      this.emailJsConfig.serviceID,
      this.emailJsConfig.templateID,
      templateParams,
      { publicKey: this.emailJsConfig.publicKey }
    )
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        // Reset form on success
        this.contactForm.reset();
        // Show success message to user
        alert('Message envoyé avec succès!');
      })
      .catch((error: EmailJSResponseStatus) => {
        console.log('FAILED...', error.text);
        // Show error message to user
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      });
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
