import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { ButtonComponent } from '../button/button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    SearchPipe,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user!: string;

  @Output() onLogin = new EventEmitter<Event>();
  @Output() onLogout = new EventEmitter<Event>();
  @Output() onCreateAccount = new EventEmitter<Event>();

  selectedValue: any;
  searchTxt!: string;

  items = [
    {
      value: 100,
      viewValue: 100,
    },
    {
      value: 200,
      viewValue: 200,
    },
    {
      value: 300,
      viewValue: 300,
    },
    {
      value: 310,
      viewValue: 310,
    },
    {
      value: 600,
      viewValue: 600,
    },
    {
      value: 500,
      viewValue: 500,
    },
    {
      value: 310,
      viewValue: 310,
    },
    {
      value: 150,
      viewValue: 150,
    },
  ];

  onSelectionChange($event: any) {
    console.log(event);
  }
}
