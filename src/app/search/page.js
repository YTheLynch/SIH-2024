"use client"
import React from "react"
import SearchItem from "@/components/SearchItem"
import { schemes } from "@/store/schemes"
import { Navbar } from "@/components/Navbar"

const page = () => {
  return (
    <>
      <Navbar />
      <div id="box" className="ml-20 pr-20 min-h-[70vh]">
        {schemes.map((scheme, index) => (
          <SearchItem key={index} name={scheme.name} organization={scheme.organization.join(", ")} className="m-6" />
        ))}
      </div>
    </>
  );
};

export default page;

