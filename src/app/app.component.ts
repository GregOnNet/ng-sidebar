import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <app-menu /> `,
  imports: [RouterOutlet, MenuComponent],
})
export class AppComponent {
  title = 'sidebar';
}
