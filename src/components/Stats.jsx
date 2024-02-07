import { getStats } from "../utils/format"


const Stats = ({ stats }) => {
  return (
    <ul>
    {
      stats?.map( stat => (
        <li key={stat.stat.url}>
          <h3 className="font-semibold">{getStats(stat.stat.name)}</h3>
          <progress className="w-full" max="100" value={stat.base_stat}></progress>
        </li>
      ))
    }
    </ul>
  )
}

export default Stats