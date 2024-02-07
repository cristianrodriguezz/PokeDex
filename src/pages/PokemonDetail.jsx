import { useNavigate, useParams } from "react-router-dom";
import { useFetchPokemonById } from "../hooks/useFetch";
import { convertLengthToMeters, convertWeightToKg, formatNumberFourDigits } from "../utils/format";
import BasisPoints from "../components/BasisPoints";
import TypesPokemon from "../components/TypesPokemon";
import Back from "../components/icons/Back";

const PokemonDetail = () => {

  const { id } = useParams()

  const { pokemon } = useFetchPokemonById(id)
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate('/')
  }

  return (
    <>
      <section className={` xl:mx-96 relative font-mono flex flex-col gap-5 items-center justify-center h-full p-1`} style={{viewTransitionName:`pokemon-container-${id}`}} >
        <Back onClick={handleClickBack} className='size-10 absolute cursor-pointer sm:left-9 sm:top-6 left-2 top-2'/>
        <article className="lg:w-96 ">
          <img className="size-full" style={{viewTransitionName:`pokemon-image-${id}`}} src={pokemon?.sprites?.other?.dream_world.front_default} alt={pokemon.name} />
        </article>
        <article className="flex gap-10">
          <h2 style={{viewTransitionName:`pokemon-name-${id}`}} className="first-letter:uppercase text-2xl lg:text-7xl mb-2 ">{pokemon.name}</h2>
          <p className="text-yellow-300 text-2xl lg:text-7xl">N.° {formatNumberFourDigits(id)}</p>
        </article>
        <article className="flex gap-3 lg:gap-10">
          <TypesPokemon types={pokemon.types}/>
          <div className="text-lg">
            <p><span className="font-semibold">Altura:</span> {convertLengthToMeters(pokemon.height)} m</p>
            <p><span className="font-semibold">Peso:</span> {convertWeightToKg(pokemon.weight)} kg</p>
          </div>
        </article>
        <BasisPoints pokemon={pokemon}/>
      </section>
    </>
  )
}

export default PokemonDetail