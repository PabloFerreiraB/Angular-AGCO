import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { INavbarData } from './helper';
import { fade, submenu } from 'src/app/animations/fade';

import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-subitem-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTooltipModule],
  template: `
    <ul
      class="subitem-nav"
      *ngIf="collapsed && data.items && data.items.length > 0"
      [@submenu]="
        expanded
          ? {
              value: 'visible',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '*'
              }
            }
          : {
              value: 'hidden',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '0'
              }
            }
      "
    >
      <li *ngFor="let item of data.items" class="subitem-nav-item">
        <a
          class="subitem-nav-link"
          (click)="handleClick(item)"
          *ngIf="item.items && item.items.length > 0"
          matTooltip="{{ item.label }}"
          [matTooltipPosition]="'right'"
        >
          <i class="subitem-link-icon fa fa-circle"></i>
          <span class="subitem-nav-text" @fadeInOut *ngIf="collapsed">
            {{ item.label }}
          </span>
          <i
            *ngIf="item.items && collapsed"
            class="menu-collapse-icon"
            [ngClass]="
              !item.expanded ? 'fal fa-angle-right' : 'fal fa-angle-down'
            "
          ></i>
        </a>

        <!-- routerLink="/product/create" -->
        <a
          class="subitem-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="['item.routeLink']"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="active-subitem"
          matTooltip="{{ item.label }}"
          [matTooltipPosition]="'right'"
        >
          <i class="subitem-link-icon fa fa-circle"></i>
          <span class="subitem-nav-text" @fadeInOut *ngIf="collapsed">
            {{ item.label }}
          </span>
        </a>

        <div *ngIf="item.items && item.items.length > 0">
          <app-subitem-menu
            [data]="item"
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          ></app-subitem-menu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [fade, submenu],
})
export class SubitemMenuComponent {
  @Input() data: INavbarData = {
    routeLink: '',
    icon: '',
    label: '',
    items: [],
  };

  @Input() collapsed = false;
  @Input() animating!: boolean;
  @Input() expanded?: boolean;
  @Input() multiple = false;

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }

    item.expanded = !item.expanded;
  }

  getClick(data: any) {
    console.log(data);
  }
}
