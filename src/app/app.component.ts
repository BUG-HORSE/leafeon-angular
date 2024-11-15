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
    <main class="d-flex flex-column min-vh-100">
        <header class="CozyLeafeon">
          <app-nav-bar></app-nav-bar>
        </header>
        <section class="content flex-grow-1">
          <router-outlet></router-outlet>
        </section>
        <footer class="footer mt-auto py-3">
          <div class="footer-container d-flex justify-content-end">
            <img
              [src]="isPlaying ? 'images/leafeon.gif' : 'images/leafeon_silent.png'"
              alt="Footer Image"
              (click)="toggleAudio()"
              class="footer-image"
              style="cursor: pointer;">
          </div>
        </footer>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leafeon-angular';
  audio = new Audio('assets/audio/lake.mp3')
  isPlaying = false;

  toggleAudio() {
    if (this.isPlaying) {
      this.audio.pause(); 
      this.isPlaying = false;
    } else {
      this.audio.play();
      this.isPlaying = true;
    }
  }
}
