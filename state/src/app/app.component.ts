import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./pokemon.service";
import { FavoritesService } from "./favorites.service";
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
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.subscribeToPokemon();
    this.subscribeToFavorites();
  }

  subscribeToPokemon() {
    this.pokemonService.getPokémon().subscribe((data) => {
      this.allPokemon = data.results;
    });
  }

  subscribeToFavorites() {
    this.favoritesService.currentFavorites.subscribe((data) => {
      this.favoritesCount = data.size;
    });
  }

  async ngOnChanges() {
    this.favoritesService.currentFavorites.subscribe((data) => {
      this.favoritesCount = data.size;
    });
  }

  selectPokemon(pokemonName: { name: String; url: String }): void {
    this.selectedPokemon = pokemonName.name;
  }
}
