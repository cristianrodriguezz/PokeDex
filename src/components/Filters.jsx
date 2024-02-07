import Sort from "./icons/Sort"
import DropDownFilter from "./DropDownFilter"
import useDropdown from "../hooks/useDropDown"
import { useStoreFilter } from "../hooks/useStore"
import { FILTER } from "../constants/filter"
import ArrowUp from "./icons/ArrowUp"
import ArrowDown from "./icons/ArrowDown"

const Filters = () => {
  
  const {showDropDown } = useDropdown(false)
  const { filters } = useStoreFilter()

  return (
    <div className="my-2 w-28 relative">
      <button className={`dropdownFilter ${showDropDown ? 'bg-violet-500 ' : ''} flex gap-1 px-2 w-28 justify-center items-center py-1 rounded-xl hover:bg-violet-500 transition-colors hover:duration-150 ease-in-out`}>
        <p>Altura</p> 
        {/* esto me cambia la flecha si esta en ascendente o en descendente */}
        { filters.sortOrder === FILTER.NONE ? <Sort/> : filters.sortOrder === FILTER.ASC ? <ArrowUp/> : <ArrowDown/> }
      </button>
      {showDropDown && <DropDownFilter/>}
    </div>
  )
}

export default Filters