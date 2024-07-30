import { useState,React } from 'react'
import Time from './Time'
import Hour from './Hour'
import Minute from './Minute'
import Nav from './Nav'


function App() {

  return (
    <div className="px-20 py-32 sm:pb-52 md:pb-46 xl:pb-20 dark:bg-black h-full">
      <div>
        <Nav />
      </div>
      <div className="flex justify-evenly flex-wrap">
        <Hour/>
        <Minute/>
      </div>
      <div className="p-10 flex flex-wrap justify-center">
        <Time city="New York"/>
        <Time city="Frankfurt"/>
        <Time city="Helsinki"/>
      </div>
    </div>
)
}

export default App
