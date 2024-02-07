import { useEffect, useState } from "react"
import { getPokemons } from "../services/pokemons"

export const useFetchPokemonsListAndDetails = () => {
  const URL = import.meta.env.VITE_BACKEND_URL

  const [urls, setUrls] = useState([])
  const [loadingPokemons, setLoadingPokemons] = useState(true)
  const [errorPokemons, setErrorPokemons] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons(URL);
        setUrls(data)
        setLoadingPokemons(false)
      } catch (error) {
        console.error('Error fetching pokemons:', error)
        setErrorPokemons('Error fetching pokemons:', error)
        setLoadingPokemons(false)
      }
    };

    fetchData()
  }, [])

  

  return {urls};
}
const useFetchPokemonDetails = (pokemonUrls) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza todas las llamadas a la API de manera concurrente
        const responses = await Promise.all(pokemonUrls.map(url => fetch(url)));
        
        // Extrae los datos JSON de cada respuesta
        const pokemonData = await Promise.all(responses.map(response => response.json()));

        // Mapea sobre los datos para extraer solo la información que necesitas
        const details = pokemonData.map(data => ({
          name: data.name,
          height: data.height,
          weight: data.weight,
          // Agrega cualquier otra propiedad que desees obtener de los datos
        }));

        setPokemonDetails(details);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pokemonUrls]);

  return { pokemonDetails, loading, error };
};
