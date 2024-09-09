import React from 'react'

const SearchItem = ({ name, organization, className}) => {
  return (
    <div className={`bg-white rounded-lg min-h-20 ${className}`}>
        <p>{name}</p>
        <p>{organization}</p>
    </div>
  )
}

export default SearchItem