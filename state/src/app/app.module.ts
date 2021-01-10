import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { SinglePokemonComponent } from "./components/singlePokemon/singlePokemon.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, SinglePokemonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
