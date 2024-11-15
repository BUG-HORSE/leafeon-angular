import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonList } from '../pokemon-list';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonListComponent],
  template: `
  <div class= "results justify-content-center">
    <app-pokemon-list *ngFor="let pokemon of pokemonList" [pokemon]="pokemon"></app-pokemon-list>
  </div>

  `,
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  pokemonList : PokemonList[] = [];
  pokemonsService : PokemonsService = inject(PokemonsService);

  constructor() {
    this.pokemonList = this.pokemonsService.getAllPokemons();
  }
}
