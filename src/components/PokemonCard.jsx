import { convertLengthToMeters, convertWeightToKg, formatNumberFourDigits } from "../utils/format";

const PokemonCard = ({ pokemon }) => {

  return (
    <li className="relative flex flex-col justify-center bg-slate-500 h-full p-3 rounded-xl">
      <div className="w-40 m-auto">
        <img className="size-full" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      </div>
      <p className="text-gray-400">N.° {formatNumberFourDigits(pokemon.id)}</p>
      <h2 className="first-letter:uppercase text-2xl mb-2">{pokemon.name}</h2>
      <p>Altura: {convertLengthToMeters(pokemon.height)} m</p>
      <p>Peso: {convertWeightToKg(pokemon.weight)} kg</p>
    </li>
  );
}

export default PokemonCard