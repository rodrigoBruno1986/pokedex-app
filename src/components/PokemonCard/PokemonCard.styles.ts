import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PokeCardContainer = styled(Link)`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  figure {
    display: flex;
    justify-content: center;
  }

  .top {
    display: flex;
    flex-direction: column;
    border: 1px solid transparent;
    border-start-start-radius: 8px;
    border-start-end-radius: 8px;
    border-bottom: none;

    span {
      text-align: end;
      padding: 4px 8px 0px;
    }

    img {
      width: 90%;
      height: 140px;
      object-fit: contain;
      align-self: center;
      padding: 0.5rem 1rem;
    }

    .loadingContainer {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .bottom {
    font-size: 16px;
    line-height: 16px;
    padding: 1rem;
    border-end-start-radius: 8px;
    border-end-end-radius: 8px;
    text-align: center;
    text-transform: capitalize;
    color: white;
  }

  &:hover {
    box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
    -webkit-box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
    transition-duration: 0.3s;
  }
`;