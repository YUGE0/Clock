import { useState,React,Suspense,useEffect } from 'react'
import Time from './Time'
import Hour from './Hour'
import Minute from './Minute'
import Nav from './Nav'
import FullScreenProvider from './FullScreenContext'

// function Load() {
//   return <h2>Loading...</h2>;
// }


function App() {

  const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }, []);
    
      if (isLoading) {
        return <div className="flex justify-around"><h1 className="text-[10rem] sm:text-[18rem] md:text-[20rem] lg:text-[25rem] xl:text-[38rem] text-black font-inter font-bold">TIME</h1></div>
      }
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
