import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
}
