import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { SelectComponent } from '../select/select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
export class HeaderComponent implements OnInit {
  @Input() user!: string;
  @Output() onLogin = new EventEmitter<Event>();
  @Output() onLogout = new EventEmitter<Event>();
  @Output() onCreateAccount = new EventEmitter<Event>();

  form!: FormGroup;
  countriesList: any = [
    { id: 'steak-0', name: 'Steak' },
    { id: 'pizza-1', name: 'Pizza' },
    { id: 'tacos-2', name: 'Tacos' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialForm();
  }

  waitForFilterResponse(value: string) {
    this.getCountryList({ name: value });
  }

  private getCountryList(params: object = {}): void {
    // params will be converted in url query params ?name={{value}}
    // this.countriesList = this.geoService.countryList(params);
  }

  private initialForm(): void {
    this.form = this.fb.group({
      dealer: [''],
    });
  }
}
