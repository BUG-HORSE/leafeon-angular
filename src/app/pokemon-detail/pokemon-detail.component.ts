import { Component, Input, inject } from '@angular/core';
import { PokemonList } from '../pokemon-list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <img class="pokemon-photo" [src]="pokemon?.photo">
      <h2>{{pokemon?.name}}</h2>
    </div>
  `,
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  @Input() pokemon !: PokemonList;

  constructor() {
    // route: ActivatedRoute = inject(ActivatedRoute);
    // const pokemonListId = Number(this.route.snapshot.params('id'));
  }
}
