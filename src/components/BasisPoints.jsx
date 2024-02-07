import Stats from "./Stats"


const BasisPoints = ({ pokemon }) => {
  return (
    <div className="border p-5 rounded-xl max-w-max">
      <h2 className="text-3xl font-semibold text- mb-2">Puntos de base</h2>
      <Stats stats={pokemon.stats}/>
    </div>
  )
}

export default BasisPoints