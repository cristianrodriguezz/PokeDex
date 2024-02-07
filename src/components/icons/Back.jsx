

const Back = ({className, onClick}) => {
  return (
    <div className={className} onClick={onClick}>
      <svg className="size-full text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7"/>
      </svg>
    </div>
  )
}

export default Back