import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, AfterViewInit {
  professions: string[] = [
    'Développeur Full Stack',
    'Expert Angular',
    'Développeur Frontend',
    'Architecte Web'
  ];
  currentProfessionIndex = 0;
  currentText = '';
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 2000;

  ngOnInit(): void {
    // Animation des statistiques au scroll
    this.initCounterAnimation();
  }

  ngAfterViewInit(): void {
    // Typing effect
    this.typeEffect();
  }

  typeEffect(): void {
    const currentWord = this.professions[this.currentProfessionIndex];

    if (this.isDeleting) {
    // Effacer le texte
    this.currentText = currentWord.substring(0, this.currentText.length - 1);
    this.typingSpeed = this.deletingSpeed;
  } else {
    // Écrire le texte
    this.currentText = currentWord.substring(0, this.currentText.length + 1);
    this.typingSpeed = 100;
  }

  // Si le texte est complet
  if (!this.isDeleting && this.currentText === currentWord) {
    this.typingSpeed = this.pauseTime;
    this.isDeleting = true;
  }
  // Si le texte est effacé
  else if (this.isDeleting && this.currentText === '') {
    this.isDeleting = false;
    this.currentProfessionIndex = (this.currentProfessionIndex + 1) % this.professions.length;
    this.typingSpeed = 500;
  }

  setTimeout(() => this.typeEffect(), this.typingSpeed);
}

  initCounterAnimation(): void {
    // Animation des compteurs
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  animateCounters(): void {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')!;
      const increment = target / 200;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current).toString();
          setTimeout(updateCounter, 10);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });
  }

  // Navigation smooth scroll
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
