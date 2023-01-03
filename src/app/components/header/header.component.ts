import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '../button/button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { INavbarData } from '../sidenav/helper';
import { Router } from '@angular/router';
import { navbarData } from '../sidenav/nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

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
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple = false;

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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  onSelectionChange($event: any) {
    console.log(event);
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded;
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
