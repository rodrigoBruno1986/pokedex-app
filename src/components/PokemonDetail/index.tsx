import { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/BackgroundsByType";
import { Loader } from "../Loader";
import { Header } from "./components/Header";
import { PokeTypes } from "./components/PokeTypes";
import { Stats } from "./components/Stats";
import { Title } from "./components/Title";
import {LoadingContainer, BackgroundContainer, InfoContainer} from "./PokemonDetail.styles"

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  if (!pokemon) {
    return (
      <LoadingContainer style={{ background: backgroundSelected }}>
        <Loader size={50} color="fff" />
      </LoadingContainer>
    );
  }

  return (
    <BackgroundContainer style={{ background: backgroundSelected }} className="bg">
      <Header pokemon={pokemon} />
      <InfoContainer className="info">
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <PokeTypes pokemon={pokemon} />
        <Title content="Description:" backgroundSelected={backgroundSelected} />
        <Stats pokemon={pokemon} />
      </InfoContainer>
    </BackgroundContainer>
  );
};
