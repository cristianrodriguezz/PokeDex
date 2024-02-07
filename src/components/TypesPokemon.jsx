import { getTypeNamePokemon, getTypePokemonColor } from "../utils/typesOfPokemon"


const TypesPokemon = ({ types }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold">TIPO</p>
      <ul className="flex gap-2">
        {
          types?.map( ( { type , slot } ) => (
            <li key={slot} className={`${getTypePokemonColor(type.name)} text-white h-10 w-16 flex items-center justify-center rounded-2xl`}>
              {getTypeNamePokemon(type.name)}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TypesPokemon