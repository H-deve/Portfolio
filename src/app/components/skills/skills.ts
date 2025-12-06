import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories = [
    {
      name: 'Frontend',
      icon: 'fas fa-code',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'SCSS/Sass', level: 85 }
      ]
    },
    {
      name: 'Backend',
      icon: 'fas fa-server',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 78 },
        { name: 'Linux', level: 82 }
      ]
    }
  ];

  tools = [
    'VS Code', 'Figma', 'Postman', 'Jira', 'Slack', 'GitHub',
    'Vercel', 'Netlify', 'Firebase', 'Supabase', 'Prisma', 'Jest'
  ];
}
