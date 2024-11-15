import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, NavBarComponent],
  template:`
    <main>
        <header class="CozyLeafeon">
          <app-nav-bar></app-nav-bar>
        </header>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leafeon-angular';
}
