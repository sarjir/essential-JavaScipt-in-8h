import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./favorites.component.html",
  selector: "favorites"
})
export default class Favorites {
  @Input()
  favoritesCount: number;
}
