type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
};

type Form = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

type VersionDetail = {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
};

type Item = {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetail[];
};

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: Item[];
  location_area_encounters: string;
}
