import { FILTER } from "../constants/filter"
import { useStoreFilter } from "../hooks/useStore"
import ArrowDown from "./icons/ArrowDown"
import ArrowUp from "./icons/ArrowUp"


const DropDownFilter = () => {

  const { setFilters } = useStoreFilter()

  const handleClickAsc = () => {
    setFilters({ sortOrder: FILTER.ASC })
  }
  const handleClickDesc = () => {
    setFilters({ sortOrder: FILTER.DESC })
  }
  const handleClickNone = () => {
    setFilters({ sortOrder: FILTER.NONE })
  }

  return (
    <div className="bg-violet-500 border border-gray-400 absolute z-10 w-28 top-9 rounded-md *:cursor-pointer">
      <ul className="*:flex *:p-1">
        <li onClick={handleClickAsc} className="hover:bg-green-400 hover:rounded-md"><ArrowUp/> Asc.</li>
        <li onClick={handleClickDesc} className="hover:bg-green-400 hover:rounded-md"><ArrowDown/> Desc.</li>
        <li onClick={handleClickNone} className="hover:bg-green-400 hover:rounded-md">Ninguno</li>
      </ul>
    </div>
  )
}

export default DropDownFilter