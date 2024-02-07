
import { useFetchPokemonDetails, useFetchPokemonsUrl } from '../hooks/useFetch'
import { useStoreFilter } from '../hooks/useStore'
import { convertLengthToMeters, convertWeightToKg, formatNumberFourDigits } from '../utils/format';
import FlipMove from 'react-flip-move';
import Loading from './Loading';
import { useNavigate } from "react-router-dom";
import { flushSync } from 'react-dom';
import { getTypePokemon } from '../utils/typesOfPokemon';


const ListPokeCard = () => {
  const { pokemons, loading, error } = useFetchPokemonsUrl()
  const { pokemonDetails } = useFetchPokemonDetails(pokemons)
  const { filterAndSortData } = useStoreFilter()
  const sortedPokemonData = filterAndSortData(pokemonDetails)
  const navigate = useNavigate()

  const handleClickDetail = (id) => {
    //esto es la api del browser para que se vean las transiciones con animación
    //algunos navegadores no lo soportan por eso el if
    if(document.startViewTransition){
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(`/pokemon/${id}`)
        })
      })
    }else{
      navigate(`/pokemon/${id}`)
    }

  }
  

  if (loading) return <Loading/>

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    
    <FlipMove typeName="ul" className='items-center justify-center mb-6' style={style}>
      {sortedPokemonData?.map(pokemon => (
        <li style={{viewTransitionName:`pokemon-container-${pokemon.id}`}} onClick={() => handleClickDetail(pokemon.id)} key={pokemon.id} className={`relative flex flex-col justify-center ${getTypePokemon(pokemon.types[0].type.name)} h-full p-3 rounded-xl cursor-pointer`}>
          <div className="w-40 m-auto">
            <img style={{viewTransitionName:`pokemon-image-${pokemon.id}`}} className="size-full" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </div>
          <p className="text-gray-600">N.° {formatNumberFourDigits(pokemon.id)}</p>
          <h2  style={{viewTransitionName:`pokemon-name-${pokemon.id}`}}  className="first-letter:uppercase text-2xl mb-2">{pokemon.name}</h2>
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
