export const getPokemons = async (url) => {
  const response = await fetch(url)
  const { results } = await response.json()

  return results
}

export const getPokemon = async (url) => {
  const response = await fetch(url)
  return await response.json()
}