import React from "react"
import SearchItem from "@/components/SearchItem"
import { schemes } from "@/store/schemes"

const page = () => {
  return <div className="pl-64 pr-32">
    <SearchItem name = "Yuganshu" organization = "['Nabard']" className = "mb-5"/>
    <SearchItem className = "mb-5"/>
    <SearchItem className = "mb-5"/>


  </div>
}

export default page
