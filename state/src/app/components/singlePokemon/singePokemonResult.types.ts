import { Pokemon } from "../../pokemon.types";

export type SingePokemonResult = {
  pokemon: Pokemon | void;
  ok: boolean;
};
