import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { Pagination } from "../../components/Pagination";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { HomeContainer } from './Home.styles'

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();

  let perPage = 12;

  return (
    <HomeContainer>
      <header className="header">
        <div onClick={backToHome} className="header__inner">
          {/* Icono */}
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonsUrls={pokemonsFiltered}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}
      />
    </HomeContainer>
  );
};
