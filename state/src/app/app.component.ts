import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./pokemon.service";
import { Pokemon } from "./pokemon.types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Testing";
  allPokemon: Pokemon[];
  selectedPokemon: String;
  favoritesCount: Number;

  constructor(
    private pokemonService: PokemonService,
  ) {}

  ngOnInit() {
    this.subscribeToPokemon();
  }

  subscribeToPokemon() {
    this.pokemonService.getPokémon().subscribe((data) => {
      this.allPokemon = data.results;
    });
  }

  selectPokemon(pokemonName: { name: String; url: String }): void {
    this.selectedPokemon = pokemonName.name;
  }
}
