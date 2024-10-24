import React from 'react'

const SearchBar = ({handleChange, ref}) => {

  return (
    <div className="flex justify-center">
          <div className="rounded-md px-10">
            <input  className="border border-solid bg-white border-gray-400 hover:border-red-500 px-10 py-2 rounded-lg placeholder:text-red-500 " type="text" placeholder='Search schemes and more...' onChange={handleChange} />
          </div>
        </div>
      
  )
}

export default SearchBar