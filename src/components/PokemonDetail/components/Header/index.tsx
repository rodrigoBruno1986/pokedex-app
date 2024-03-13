import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../../../assets/arrows";
import { IPokemon } from "../../../../interfaces/interfaces";
import {HeaderContainer, LeftContainer} from "./Header.styles"

interface Props {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LeftContainer>
        <ArrowLeftIcon onClick={() => navigate(-1)} />
        <span>{pokemon?.name}</span>
      </LeftContainer>
      <p>#{pokemon?.id}</p>
    </HeaderContainer>
  );
};
