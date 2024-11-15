import { Component, Input } from '@angular/core';
import { PokemonList } from '../pokemon-list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
  <div class="container mt-3 p-2 d-flex justify-content-center">
    <div class="text-center">
      <a [routerLink]="['/pokemon-detail', pokemon.id]"><img [src]="pokemon.photo" alt="Picture of {{pokemon.name}}"></a>
      <h2>{{pokemon.name}}</h2>
      <p>type: {{pokemon.type}} </p>
      <p>base-experience: {{pokemon.base_experience}}</p>
    </div>
  </div>
  `,
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  @Input() pokemon !: PokemonList;
}
