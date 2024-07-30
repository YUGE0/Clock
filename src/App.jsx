import { useState,React } from 'react'
import Time from './Time'
import Hour from './Hour'
import Minute from './Minute'
import Nav from './Nav'


function App() {

  return (
    <div className="px-20 py-20 dark:bg-black">
      <div>
        <Nav/>
      </div>
      <div className="flex gap-10 justify-evenly flex-wrap items-center">
        <Hour/>
        <Minute/>
      </div>
      <div className="p-10 flex justify-around">
        <Time/>
        <Time/>
        <Time/>
      </div>
    </div>
)
}

export default App
