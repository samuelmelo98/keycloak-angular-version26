import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent],
  template: `
    <app-header></app-header>
    <app-menu></app-menu>

    <main class="content">
      <router-outlet></router-outlet>
    </main>

    <app-footer></app-footer>
  `
})
export class ShellComponent {}
