import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ThemeService} from '../../../core/services/theme';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule , RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {



}
