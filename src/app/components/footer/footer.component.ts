import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getFooterClass(): string {
    let styleClass = '';

    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'footer-trimmed';
    } else {
      styleClass = 'footer-md-screen';
    }

    return styleClass;
  }
}
