import { useFetchPokemonDetails } from "../hooks/useFetch";
import { convertLengthToMeters, convertWeightToKg, formatNumberFourDigits } from "../utils/format";

const PokemonCard = ({ pokemon }) => {
  const { details, loading, error } = useFetchPokemonDetails(pokemon.url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <li className="relative">
      {
        details 
        && 
        <>
          <div className="w-40 ">
            <img className="size-full" src={details.sprites.other.dream_world.front_default} alt={pokemon.name} />
          </div>
          <p>N.° {formatNumberFourDigits(details.id)}</p>
          <h2 className="first-letter:uppercase">{pokemon.name}</h2>
          <p>Altura: {convertLengthToMeters(details.height)} m</p>
          <p>Peso: {convertWeightToKg(details.weight)} kg</p>
        </>
      }
    </li>
  );
}

export default PokemonCard