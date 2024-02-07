import { useFetchPokemons } from '../hooks/useFetch';
import PokemonCard from './PokemonCard';

const ListPokeCard = () => {
  const { pokemons, loading, error } = useFetchPokemons();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.url} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ListPokeCard;
