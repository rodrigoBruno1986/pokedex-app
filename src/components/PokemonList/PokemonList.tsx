import { PokemonCard } from "../PokemonCard/PokemonCard";
import {PokemonsContainer} from "./PokemonList.styles"

interface Props {
  pokemonsUrls?: string[] | null;
  page: number;
  perPage: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <PokemonsContainer>
      {pokemonsUrls
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </PokemonsContainer>
  );
};
