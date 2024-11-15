import { Injectable } from '@angular/core';
import { PokemonList } from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  protected pokemonList : PokemonList[] = [    {
    "photo": "images/bulbasaur.png",
    "id": 1,
    "name": "Bulbasaur",
    "type": "Grass",
    "base_experience": 64
  },
  {
    "photo": "images/ivysaur.png",
    "id": 2,
    "name": "Ivysaur",
    "type": "Grass",
    "base_experience": 142
  },
  {
    "photo": "images/venusaur-f.png",
    "id": 3,
    "name": "Venusaur",
    "type": "Grass",
    "base_experience": 236
  }];

  constructor() { }

  getAllPokemons() : PokemonList[] {
    return this.pokemonList
  }

  getPokemonById(id: number) : PokemonList | undefined {
    return this.pokemonList.find(pokemon => pokemon.id === id)
  }
}
