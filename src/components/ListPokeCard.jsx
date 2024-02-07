
import { useFetchPokemonDetails, useFetchPokemonsUrl } from '../hooks/useFetch'
import { useStoreFilter } from '../hooks/useStore'
import { convertLengthToMeters, convertWeightToKg, formatNumberFourDigits } from '../utils/format';
import PokemonCard from './PokemonCard'
import FlipMove from 'react-flip-move';


const ListPokeCard = () => {
  const { pokemons, loading, error } = useFetchPokemonsUrl()
  const { pokemonDetails } = useFetchPokemonDetails(pokemons)
  const { filterAndSortData } = useStoreFilter();
  

  const sortedPokemonData = filterAndSortData(pokemonDetails);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    
    <FlipMove typeName="ul" className='items-center justify-center' style={style}>
      {sortedPokemonData?.map(pokemon => (
        <li key={pokemon.id} className="relative flex flex-col justify-center bg-slate-500 h-full p-3 rounded-xl">
          <div className="w-40 m-auto">
            <img className="size-full" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </div>
          <p className="text-gray-400">N.° {formatNumberFourDigits(pokemon.id)}</p>
          <h2 className="first-letter:uppercase text-2xl mb-2">{pokemon.name}</h2>
          <p>Altura: {convertLengthToMeters(pokemon.height)} m</p>
          <p>Peso: {convertWeightToKg(pokemon.weight)} kg</p>
        </li>
      ))}
    </FlipMove>
  )
}

const style = {
  'listStyle': 'none',
  'display': 'grid',
  'gridTemplateColumns': 'repeat(auto-fit, minmax(200px,1fr))',
  'gap': '1rem'
}

export default ListPokeCard;
