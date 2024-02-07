
import { useFetchPokemonDetails, useFetchPokemonsUrl } from '../hooks/useFetch'
import PokemonCard from './PokemonCard'


const ListPokeCard = () => {
  const { pokemons, loading, error } = useFetchPokemonsUrl()
  const { pokemonDetails } = useFetchPokemonDetails(pokemons)



  console.log(pokemonDetails);


  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <ul className='items-center justify-center' style={style}>
      {pokemonDetails.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </ul>
  )
}

const style = {
  'listStyle': 'none',
  'display': 'grid',
  'gridTemplateColumns': 'repeat(auto-fit, minmax(200px,1fr))',
  'gap': '1rem'
}

export default ListPokeCard;
