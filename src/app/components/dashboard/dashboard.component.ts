import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SearchPipe } from 'src/app/pipes/search.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SearchPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  selectedValue: any;
  searchTxt: any;

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
