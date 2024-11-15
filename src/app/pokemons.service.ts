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
  },
  {
    "photo": "images/charmander.png",
    "id": 4,
    "name": "Charmander",
    "type": "Fire",
    "base_experience": 62
  },
  {
    "photo": "images/charmeleon.png",
    "id": 5,
    "name": "Charmeleon",
    "type": "Fire",
    "base_experience": 142
  },
  {
    "photo": "images/charizard.png",
    "id": 6,
    "name": "Charizard",
    "type": "Fire",
    "base_experience": 240
  },
  {
    "photo": "images/squirtle.png",
    "id": 7,
    "name": "Squirtle",
    "type": "Water",
    "base_experience": 63
  },
  {
    "photo": "images/wartortle.png",
    "id": 8,
    "name": "Wartortle",
    "type": "Water",
    "base_experience": 142
  },
  {
    "photo": "images/blastoise.png",
    "id": 9,
    "name": "Blastoise",
    "type": "Water",
    "base_experience": 239
  },
  {
    "photo": "images/eevee.png",
    "id": 133,
    "name": "Eevee",
    "type": "Normal",
    "base_experience": 65
  },
  {
    "photo": "images/jolteon.png",
    "id": 135,
    "name": "Jolteon",
    "type": "Electric",
    "base_experience": 184
  },
  {
    "photo": "images/vaporeon.png",
    "id": 134,
    "name": "Vaporeon",
    "type": "Water",
    "base_experience": 184
  },
  {
    "photo": "images/flareon.png",
    "id": 136,
    "name": "Flareon",
    "type": "Fire",
    "base_experience": 184
  },
  {
    "photo": "images/espeon.png",
    "id": 196,
    "name": "Espeon",
    "type": "Psychic",
    "base_experience": 184
  },
  {
    "photo": "images/umbreon.png",
    "id": 197,
    "name": "Umbreon",
    "type": "Dark",
    "base_experience": 184
  },
  {
    "photo": "images/leafeon_silent.png",
    "id": 470,
    "name": "Leafeon",
    "type": "Grass",
    "base_experience": 184
  },
  {
    "photo": "images/glaceon.png",
    "id": 471,
    "name": "Glaceon",
    "type": "Ice",
    "base_experience": 184
  },
  {
    "photo": "images/sylveon.png",
    "id": 700,
    "name": "Sylveon",
    "type": "Fairy",
    "base_experience": 184
  }
];

  constructor() { }

  getAllPokemons() : PokemonList[] {
    return this.pokemonList
  }

  getPokemonById(id: number) : PokemonList | undefined {
    return this.pokemonList.find(pokemon => pokemon.id === id)
  }
}
