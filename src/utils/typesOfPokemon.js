//esta funcion me devuelve el color que necesito para cada tipo de pokemon
export const getTypePokemonColor = (type) => {

  const typesOfPokemon = {
    grass: 'bg-green-400',
    fire: 'bg-red-400',
    flying: 'bg-blue-600',
    water: 'bg-blue-500',
    bug: 'bg-yellow-500',
    poison: 'bg-purple-900',
    normal: 'bg-gray-500'
  }

  return typesOfPokemon[type]
}
// me da el tipo de pokemon en español
export const getTypeNamePokemon = (type) => {

  const typesOfPokemon = {
    grass: 'Hierba',
    fire: 'Fuego',
    flying: 'Volador',
    water: 'Agua',
    bug: 'Bicho',
    poison: 'Veneno',
    normal: 'Normal'
  }

  return typesOfPokemon[type]
}