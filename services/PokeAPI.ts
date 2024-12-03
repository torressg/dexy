import axios, { AxiosResponse } from 'axios';
import { PokemonModel } from '../Models/PokemonModel';

export class PokeAPIService {
  private baseURL: string;

  constructor() {
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  async fetchAllPokemons() {
    try {
      const limit = 100;
      const firstResponse = await axios.get(`${this.baseURL}pokemon?limit=${limit}&offset=0`);
      const totalPokemons = firstResponse.data.count;
      const totalPages = Math.ceil(totalPokemons / limit);

      const pokemonRequests = [];

      for (let page = 0; page < totalPages; page++) {
        const offset = page * limit;
        pokemonRequests.push(axios.get(`${this.baseURL}pokemon?limit=${limit}&offset=${offset}`));
      }

      const responses = await Promise.all(pokemonRequests);

      const pokemonUrls: any[] = responses.map((response: AxiosResponse) => response.data.results).flat();

      const pokemonDetailsPromises = pokemonUrls.map((pokemon: any) =>
        this.fetchPokemonDetailsByUrl(pokemon.url)
      );

      return await Promise.all(pokemonDetailsPromises);
    } catch (error) {
      console.error('Erro ao buscar todos os Pokémon:', error);
      return [];
    }
  }

  private async fetchPokemonDetailsByUrl(url: string): Promise<PokemonModel> {
    try {
      const response = await axios.get(url);
      const data = response.data;

      return new PokemonModel(data.id, data.name, data.sprites.front_default);
    } catch (error) {
      console.error(`Erro ao buscar detalhes do Pokémon na URL ${url}:`, error);
      return new PokemonModel(0, 'Desconhecido', '');
    }
  }
}
