import React from 'react'

const SearchBar = ({handleChange}) => {

  return (
    <div className="flex justify-center">
        <div className="border border-solid border-red-500 px-5 py-2 rounded-lg">
          <div className="rounded-md px-10">
            <input type="text" placeholder='Search schemes and more...' onChange={handleChange} />
          </div>
        </div>
      </div>
  )
}

export default SearchBar