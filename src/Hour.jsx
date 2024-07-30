import {useEffect,useState,React} from 'react'

export default function Hour() {
  const [currentHour, setHour] = useState('');
  const [currentSec, setSec] = useState('');
  const [currentAmPM,setAmPm] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      setHour(formatTime(hour));
      setSec(formatTime(now.getSeconds()));
      setAmPm(ampm(hour))
    };
    // Call the function immediately to set the initial time
    updateDateTime();
    // Update the time every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time.toString();
  }

  function ampm(time){
    return time >12 ? "PM" : "AM"
  }

  return (
    <div className="shadow-black dark:shadow-white/50 shadow-md px-5 rounded-lg xl:w-102 xl:h-102 lg:w-101 lg:h-101 md:w-100 md:h-100 w-99 h-99">
        <div className="flex justify-center">
          <h1 className="xl:text-Big lg:text-Mid md:text-Lit text-Ef font-Sa font-light dark:text-white">{currentHour}</h1>
        </div>
        <div className="px-10 flex justify-between">
          <h1 className="pb-2 md:text-5xl text-3xl font-bold font-inter dark:text-white">{currentAmPM}</h1>
          <h1 className="pb-2 md:text-5xl text-3xl font-bold font-inter dark:text-white">:{currentSec}</h1>
        </div>
    </div>
  )
}
