import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="d-flex justify-content-center mt-3 p-2">
  <button type="button" class="btn btn-danger me-2">
      <a [routerLink]="['/']">Home</a>
    </button>
    <button type="button" class="btn btn-success me-2">
      <a [routerLink]="['/Luna']">Luna</a>
    </button>
    <button type="button" class="btn btn-primary me-2">
      <a [routerLink]="['/Pokedex']">Pokedex</a>
    </button>
  </div>
  `,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
