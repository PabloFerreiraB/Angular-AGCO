import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user!: string;

  doLogout() {
    this.user = '';
  }

  doLogin() {
    this.user = 'Jane Doe';
  }

  doCreateAccount() {
    this.user = 'Jane Doe';
  }
}
