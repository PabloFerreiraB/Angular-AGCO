import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { SelectComponent } from '../select/select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SelectComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: string;
  @Output() onLogin = new EventEmitter<Event>();
  @Output() onLogout = new EventEmitter<Event>();
  @Output() onCreateAccount = new EventEmitter<Event>();
}
