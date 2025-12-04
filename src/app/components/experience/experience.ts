import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      position: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale web applications and mentoring junior developers. Responsible for architecture decisions and implementing best practices across the development team.',
      achievements: [
        'Led a team of 5 developers in building a customer portal that increased user engagement by 40%',
        'Implemented CI/CD pipelines that reduced deployment time by 60%',
        'Architected microservices infrastructure serving 100k+ daily active users',
        'Mentored 3 junior developers who were promoted within 12 months'
      ],
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      position: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications from concept to deployment. Worked closely with design and product teams to deliver user-centric solutions.',
      achievements: [
        'Built the company\'s main product from scratch, acquiring 10k+ users in first year',
        'Optimized application performance, reducing load times by 50%',
        'Implemented real-time features using WebSocket technology',
        'Contributed to 300% revenue growth through feature development'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Redis', 'Socket.io', 'Stripe API']
    },
    {
      position: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive, accessible web interfaces for various clients. Collaborated with designers to bring creative visions to life.',
      achievements: [
        'Delivered 20+ client projects with 100% on-time completion rate',
        'Improved website accessibility scores by average of 35%',
        'Reduced client feedback cycles by implementing design system',
        'Achieved 98% client satisfaction rating'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'jQuery', 'Bootstrap']
    }
  ];

  educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated Magna Cum Laude with focus on software engineering and web technologies. Active member of the Computer Science Society.'
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code Academy Pro',
      period: '2019',
      description: 'Intensive 6-month program covering modern web development technologies and best practices. Completed with distinction.'
    }
  ];
}
