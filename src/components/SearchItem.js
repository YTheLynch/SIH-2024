import React from 'react'

const SearchItem = ({ name, organization, className}) => {
  return (
    <div className={`bg-red-400 rounded-lg min-h-20 ${className}`}>
        <p>{name}</p>
        <p>{organization}</p>
    </div>
  )
}

export default SearchItem