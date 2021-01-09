import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

type Favorite = string;

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  private favorites: Set<Favorite> = new Set();
  private favoritesSource = new BehaviorSubject<Set<Favorite>>(this.favorites);
  public currentFavorites = this.favoritesSource.asObservable();

  public toggleFavorite(singlePokemon: string): void {
    if (!this.favorites.has(singlePokemon)) {
      this.favoritesSource.next(this.favorites.add(singlePokemon));
    } else {
      this.favorites.delete(singlePokemon);
      this.favoritesSource.next(this.favorites);
    }
  }

  public isFavorite(singlePokemon: string): boolean {
    return this.favorites.has(singlePokemon);
  }
}
