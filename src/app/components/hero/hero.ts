import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero  implements OnInit {
  ngOnInit() {
    // Add any initialization logic here
  }
}
