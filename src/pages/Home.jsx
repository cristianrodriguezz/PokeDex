import Filters from "../components/Filters"
import ListPokeCard from "../components/ListPokeCard"


const Home = () => {
  return (
    <div className="2xl:mx-96 xl:mx-40 lg:mx-16 sm:mx-10 mx-2 font-noto font-semibold">
      <h1 className="font-honk text-7xl text-center my-5 sm:text-9xl">POKEDEX</h1>
      <Filters/>
      <ListPokeCard/>
    </div>
  )
}


export default Home