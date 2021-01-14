import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "The Jungle";
  plant = {
    genus: "aroid",
    species: "Monstera",
    variant: "Delicioisa"
  };
  characteristics = [
    "Has inflorecens",
    "Can grow huge like a monster, hence the name",
    "The older it gets, the more fenestrations it gets"
  ];
}
