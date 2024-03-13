import { PokeballIconBig } from "../../../../assets/pokeball";
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  max-width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem;
  color: white;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    cursor: pointer;
  }

  svg:hover {
    transform: scale(1.2);
    transition-duration: 0.3s;
  }

  span {
    font-weight: bold;
    text-transform: capitalize;
    font-size: 32px;
  }
`;