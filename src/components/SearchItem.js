import React from 'react'

const SearchItem = (props) => {
  return (
    <div className={`bg-white text-black rounded-md min-h-8 hover:text-red-700 hover:scale-105 hover:transition-scale  p-8 text-bold border border-solid shadow-md border-gray-900 ${props?.className}`}>
        <p className='mb-5 text-[1rem]'>{props?.name}</p>
        <p className='text-[0.8rem]'>{props?.organization}</p>
    </div>
  )
}

export default SearchItem