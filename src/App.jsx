import { useState,React } from 'react'
import Time from './Time'
import Hour from './Hour'
import Minute from './Minute'
import Nav from './Nav'
import FullScreenProvider from './FullScreenContext'


function App() {

  return (
    <FullScreenProvider>
    <div className="px-20 xl:py-20 md:py-22 sm:py-48 pb-40 dark:bg-black h-full">
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
    </FullScreenProvider>
)
}

export default App
