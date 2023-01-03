import { INavbarData } from './helper';
import { Router, RouterModule } from '@angular/router';
import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  HostListener,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { navbarData } from './nav-data';

import { SubitemMenuComponent } from './subitem-menu.component';
import { fade } from 'src/app/animations/fade';

import { MatTooltipModule } from '@angular/material/tooltip';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTooltipModule, SubitemMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fade],
})
export class SidenavComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  navData = navbarData;
  multiple = false;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
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
