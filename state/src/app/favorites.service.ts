import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

type Favorite = string;

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  public toggleFavorite(singlePokemon: string): void {
  }

  public isFavorite(singlePokemon: string): boolean {
    return false;
  }
}