import { useState,React } from 'react'
import Time from './Time'
import Hour from './Hour'
import Minute from './Minute'

function App() {

  return (
    <div className="p-10">
    <div className="flex gap-10 justify-evenly">
      <Hour/>
      <Minute/>
    </div>
    <div className="p-10">
      <Time/>
    </div>
    </div>
)
}

export default App
