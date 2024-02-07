import { useEffect, useState } from "react"
import { getPokemons } from "../services/pokemons"

export const useFetchPokemonsList   = () => {
  const URL = import.meta.env.VITE_BACKEND_URL

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const data = await getPokemons(URL);
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

export const useFetchPokemonDetails = (url) => {
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setDetails(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchDetails()
  }, [url])

  return { details, loading, error }
}

