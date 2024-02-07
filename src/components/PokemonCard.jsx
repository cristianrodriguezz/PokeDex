
const PokemonCard = ({ pokemon }) => {

  return (
    <li key={pokemon.url}>
      {pokemon.name}
    </li>

  )
}

export default PokemonCard