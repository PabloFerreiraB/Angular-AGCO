import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { debounceTime, map, merge, Observable, of, startWith } from 'rxjs';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

import { FormControlValueAccessorConnector } from './control-value-accessor/control-value-accessor.component';

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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
})
export class SelectComponent
  extends FormControlValueAccessorConnector
  implements OnInit, OnChanges
{
  @Input() appearance!: 'legacy' | 'standard' | 'fill' | 'outline';
  @Input() placeholder: string = "Specify placeholder='you placeholder here'";
  @Input() items: Observable<Array<any>> | null | undefined;

  @Input() bindValueKey: string = 'value';
  @Input() bindLabelKey: string = 'label';
  @Input() searchPlaceholder: string = 'Search your item ...';
  @Output() itemFilterServerSide = new EventEmitter<string>();
  filterFormControl: FormControl = new FormControl('');

  private isServerSide: boolean = true;
  private currentStaticItems: Array<any> = [];

  constructor(injector: Injector) {
    super(injector);
  }

  private listenToFilterFormControlChanges(): void {
    this.filterFormControl.valueChanges
      .pipe(startWith(''), debounceTime(300))
      .subscribe((value: string) => {
        if (this.isServerSide) {
          this.itemFilterServerSide.emit(value);
        } else {
          this.filterStaticList(value);
        }
      });
  }

  private filterStaticList(value: string) {
    const currentItems = this.currentStaticItems;
    console.log('1', currentItems);

    const filterValue = this._normalizeValue(value);
    console.log('2', filterValue);

    this.items = of(
      currentItems.filter((item) => {
        console.log('3', item);

        return this._normalizeValue(item).includes(filterValue);
      })
    );
  }

  private _normalizeValue(value: any): string {
    if (typeof value != 'string') {
      value = value[this.bindLabelKey];
    }
    return value?.toLowerCase().replace(/\s/g, '');
  }

  ngOnInit(): void {
    this.listenToFilterFormControlChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.items instanceof Array) {
      this.currentStaticItems = this.items;
      this.items = of(this.items);
      this.isServerSide = false;
    }
  }
}
