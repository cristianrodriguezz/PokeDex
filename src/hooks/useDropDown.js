import { useEffect, useState } from 'react';

const useDropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdownFilter')) {
        setShowDropDown(false)
      } else {
        setShowDropDown(!showDropDown)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showDropDown])


  return { showDropDown }
}

export default useDropdown
