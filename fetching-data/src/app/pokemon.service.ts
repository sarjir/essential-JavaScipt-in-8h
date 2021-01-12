import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private pokemonUrl = "https://pokeapi.co/api/v2/pokemon";
}
