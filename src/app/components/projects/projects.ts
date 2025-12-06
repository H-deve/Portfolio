import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterLinkActive, RouterModule} from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule  ,RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics. Built with modern technologies for optimal performance and user experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Advanced search & filtering',
        'Admin dashboard with analytics',
        'Mobile-responsive design'
      ],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/alexmorgan/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      features: [
        'Real-time collaboration',
        'Drag & drop interface',
        'Team management',
        'Progress tracking'
      ],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/alexmorgan/task-manager'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics dashboard with interactive charts, forecasting, and location-based insights.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      features: [
        'Interactive data visualization',
        '7-day weather forecast',
        'Location-based insights',
        'Historical data analysis'
      ],
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/alexmorgan/weather-dashboard'
    },
    {
      title: 'Social Media Analytics',
      description: 'Advanced social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Python', 'TensorFlow', 'Redis'],
      features: [
        'Sentiment analysis',
        'Engagement metrics',
        'Automated reporting',
        'Multi-platform integration'
      ],
      liveUrl: 'https://social-analytics-demo.com',
      githubUrl: 'https://github.com/alexmorgan/social-analytics'
    }
  ];

}
