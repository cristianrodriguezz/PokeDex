import { useParams } from "react-router-dom";
import { useFetchPokemonById } from "../hooks/useFetch";
import { formatNumberFourDigits } from "../utils/format";
import BasisPoints from "../components/BasisPoints";

const PokemonDetail = () => {

  const { id } = useParams()

  const { pokemon } = useFetchPokemonById(id)

  console.log(pokemon);

  return (
    <>
      <section className={` relative font-mono flex flex-col gap-5 items-center justify-center h-full p-3 rounded-xl cursor-pointer`} style={{viewTransitionName:`pokemon-container-${id}`}} >
        <article className="w-96 ">
          <img className="size-full" style={{viewTransitionName:`pokemon-image-${id}`}} src={pokemon?.sprites?.other?.dream_world.front_default} alt={pokemon.name} />
        </article>
        <article className="flex gap-10">
          <h2 style={{viewTransitionName:`pokemon-name-${id}`}} className="first-letter:uppercase text-7xl mb-2 ">{pokemon.name}</h2>
          <p className="text-yellow-300 text-7xl">N.° {formatNumberFourDigits(id)}</p>
        </article>
        <article className="flex">
          <BasisPoints pokemon={pokemon}/>
          <BasisPoints pokemon={pokemon}/>
        </article>
      </section>
    </>
  )
}

export default PokemonDetail