import React from 'react'

const SearchItem = (props) => {
  return (
    <div className={`bg-white rounded-lg min-h-18 p-2 border border-solid shadow-md border-gray-500 ${props?.className}`}>
        <p className='mb-5'>{props?.name}</p>
        <p className='text-[0.7rem]'>{props?.organization}</p>
    </div>
  )
}

export default SearchItem