import { IPokemon } from "../../../../interfaces/interfaces";
import {StatsContainer, StatsItem} from "./Stats.styles"

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <StatsContainer>
      <StatsItem>
        <p>Weight: <span>{pokemon?.weight}</span> lbs</p>
      </StatsItem>
    </StatsContainer>
  );
};
