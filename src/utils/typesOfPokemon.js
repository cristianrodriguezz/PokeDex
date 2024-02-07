//esta funcion me devuelve el color que necesito para cada tipo de pokemon
export const getTypePokemon = (type) => {

  const typesOfPokemon = {
    grass: 'bg-green-400',
    fire: 'bg-red-400',
    flying: 'bg-blue-600',
    water: 'bg-blue-500',
    bug: 'bg-yellow-500',
    normal: 'bg-gray-500'
  }

  return typesOfPokemon[type]
}