import { useEffect, useState } from "react"
import { getPokemon, getPokemons } from "../services/pokemons"

export const useFetchPokemonsUrl = () => {
  const URL = import.meta.env.VITE_BACKEND_URL

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const data = await getPokemons(`${URL}?limit=10&offset=0`)
      setPokemons(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching:', error)
      setError('Error fetching:', error)
      setLoading(false)
    }
  };

  useEffect(() => {
    getData()
  }, [])


  return { pokemons, loading, error }
}

export const useFetchPokemonDetails = (pokemonUrls) => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pokemonDetails, setPokemonDetails] = useState([])


  useEffect(() => {
    const fetchData = async () => {

      try {

        // Realiza todas las llamadas a la API de manera concurrente
        const responses = await Promise.all(pokemonUrls.map(url => fetch(url.url)))

        const data = await Promise.all(responses.map(response => response.json()))

        setPokemonDetails(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching Pokemon details:', error)
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [pokemonUrls])

  return { pokemonDetails, loading, error }
}

export const useFetchPokemonById = (id) => {

  const URL = import.meta.env.VITE_BACKEND_URL

  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const data = await getPokemon(`${URL}/${id}`)
      setPokemon(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching:', error)
      setError('Error fetching:', error)
      setLoading(false)
    }
  };

  useEffect(() => {
    getData()
  }, [id])


  return { pokemon, loading, error }
}
