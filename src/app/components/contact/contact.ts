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
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  contactMethods = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'alex@alexmorgan.dev'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+1 (555) 123-4567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'San Francisco, CA'
    }
  ];

  socialLinks = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/alexmorgan'
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/alexmorgan'
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/alexmorgan'
    },
    {
      icon: 'fab fa-dribbble',
      url: 'https://dribbble.com/alexmorgan'
    }
  ];

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I\'ll get back to you soon.');
      this.resetForm();
      this.isSubmitting = false;
    }, 2000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
