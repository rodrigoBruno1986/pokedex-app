import { IPokemon } from "../../../../interfaces/interfaces";
import { background } from "../../../../utils/BackgroundsByType";
import {TypesContainer, TypeItem} from "./PokeTypes.styles"

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  return (
    <TypesContainer>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <TypeItem key={name} style={{ background: background[name] }}>
          {name}
        </TypeItem>
      ))}
    </TypesContainer>
  );
};