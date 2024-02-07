import { convertLengthToMeters, convertWeightToKg, formatNumberFourDigits } from "../utils/format";

const PokemonCard = ({ pokemon }) => {

  return (
    <li className="relative">
      <div className="w-40 ">
        <img className="size-full" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      </div>
      <p>N.° {formatNumberFourDigits(pokemon.id)}</p>
      <h2 className="first-letter:uppercase">{pokemon.name}</h2>
      <p>Altura: {convertLengthToMeters(pokemon.height)} m</p>
      <p>Peso: {convertWeightToKg(pokemon.weight)} kg</p>
    </li>
  );
}

export default PokemonCard