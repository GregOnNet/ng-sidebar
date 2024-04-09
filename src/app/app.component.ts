import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="flex gap-8">
      <app-menu />
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [RouterOutlet, MenuComponent],
})
export class AppComponent {
  title = 'sidebar';
}
