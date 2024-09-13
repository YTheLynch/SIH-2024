"use client"
import React from 'react'
import { Navbar } from '@/components/Navbar'
import SearchItem from '@/components/SearchItem'
import { schemes } from '@/store/schemes'
import SearchBar from '@/components/SearchBar'
import { useState, useRef, useEffect } from 'react'


const Page = () => {
  const [searchq, setSearchq] = useState('');

  const handleChange = (e) => {
      setSearchq(e.target.value)
  }



   const genResults = () => {
    return searchq === '' ? (
      schemes.map((scheme, index) => (
        <SearchItem key={index} name={scheme.name} organization={scheme.organization.join(", ")} className="m-6" />
      ))
    ) : (
      schemes.filter(scheme => scheme.name.toLowerCase().includes(searchq.toLowerCase()) || scheme.organization.join(", ").toLowerCase().includes(searchq.toLowerCase())).map((scheme, index) => (
        <SearchItem key={index} name={scheme.name} organization={scheme.organization.join(", ")} className="m-6" />
      ))
    );
   }

  return (
    <>
    
    <Navbar hideSearch = {true}/>
    <SearchBar handleChange = {handleChange} />

    <div id="box" className="ml-20 pr-20 min-h-[70vh]">
      {genResults()}  
    </div>
    
  </>
  )
}

export default Page