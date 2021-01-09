import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "./favorites.service";
import { Pokemon } from "./pokemon.types";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Pokédex";
  allPokemon: Pokemon[];
  selectedPokemon: String;
  favoritesCount: Number;

  constructor(
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.subscribeToFavorites();
  }

  subscribeToPokemon() {
    // write code to fetch pokémon here
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
