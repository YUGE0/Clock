import {useEffect,useState,React} from 'react'
import { useFullScreen } from './FullScreenContext';

export default function Nav() {

    const { handleFullScreen } = useFullScreen();
    const[theme,setTheme] = useState("Dark")
    console.log(theme);
    const element = document.documentElement

    useEffect(()=>{
        switch (theme) {
            case "Dark":
                element.classList.add('dark')
                break;
            case "Light":
                element.classList.remove('dark')    
                break;
            default:
                break;
        }
    },[theme])
    

  return (
    <div className="flex gap-2 justify-center"> 
    {theme==="Dark" && <button className="p-2 shadow-inner shadow-black/30 rounded-lg hover:bg-blue-300/50 dark:text-white" onClick={()=>{setTheme("Light")}}>Light</button>}
    {theme==="Light" && <button className="p-2 shadow-inner shadow-black/30 rounded-lg hover:bg-black/70 hover:text-white dark:text-white" onClick={()=>{setTheme("Dark")}}>Dark</button>}
    <button className="p-2 shadow-inner shadow-black/30 rounded-lg hover:bg-black/70 hover:text-white dark:text-white" onClick={handleFullScreen}>Full Screen</button>
    </div>
  )
}
