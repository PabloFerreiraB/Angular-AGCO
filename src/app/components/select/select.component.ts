import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { map, merge, Observable, of } from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OPTIONS } from './options';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  singleSelectedWithSearch!: string;

  searchCtrl: FormControl = new FormControl();
  filteredOptions?: Observable<string[]>;

  private options: string[] = OPTIONS;

  ngOnInit(): void {
    this.filteredOptions = merge(
      of(OPTIONS),
      this.searchCtrl.valueChanges.pipe(
        map((value: any) => {
          console.log(this.getFilteredOptions(value));
          return this.getFilteredOptions(value);
        })
      )
    );
  }

  private getFilteredOptions(value: any): string[] {
    const searchFilter = value && value.new ? value.value : value;

    return searchFilter
      ? this.options.filter((option) =>
          option.toLowerCase().includes(searchFilter.toLowerCase())
        )
      : this.options;
  }
}
