import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import { Loader } from "../Loader";
import {PokeCardContainer} from "./PokemonCard.styles"

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  return (
    <PokeCardContainer to={`/${pokemon?.id}`}>
      <div style={{ borderColor: backgroundSelected }} className="top">
        <span style={{ color: backgroundSelected }}>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <figure style={{ height: "140px" }}>
            <img
              src={
                pokemon?.sprites?.other?.dream_world?.front_default ||
                pokemon?.sprites?.front_default
              }
              alt={pokemon?.name}
            />
          </figure>
        ) : (
          <div className="loadingContainer">
            <Loader color={backgroundSelected} />
          </div>
        )}
      </div>
      <div style={{ background: backgroundSelected }} className="bottom">
        {pokemon?.name || "###"}
      </div>
    </PokeCardContainer>
  );
};
