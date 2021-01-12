import { Component, Input } from "@angular/core";
import { FavoritesService } from "../../favorites.service";
import { SingePokemonResult } from "./singePokemonResult.types";

@Component({
  templateUrl: "./singlePokemon.component.html",
  selector: "single-pokemon",
  styleUrls: ["./singlePokemon.component.css"]
})
export class SinglePokemonComponent {
  @Input()
  nameOfPokemon: string;
  pokemonData: SingePokemonResult;
  isFavorite: boolean;
  isLoading: boolean;

  constructor(private favoritesService: FavoritesService) {}

  async ngOnChanges() {
    this.isLoading = true;

    if (this.nameOfPokemon) {
      await this.setPokemon(this.nameOfPokemon);
    }

    this.isLoading = false;
  }

  async setPokemon(nameOfPokemon) {
    this.pokemonData = await this.getThisPokemon(nameOfPokemon);
    this.isFavorite = this.favoritesService.isFavorite(nameOfPokemon);
  }

  handleFavoriteClick(name: string) {
    this.favoritesService.toggleFavorite(name);
    this.isFavorite = this.favoritesService.isFavorite(this.nameOfPokemon);
  }

  getThisPokemon(singlePokemon: String): Promise<SingePokemonResult> {
    // https://pokeapi.co/api/v2/pokemon/${singlePokemon}/
}
