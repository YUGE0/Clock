import {useState,useEffect,React} from 'react'

export default function Time({city}) {
  const [currentHour, setHour] = useState('');
  const [currentMinute, setMinute] = useState('');
  const [currentAmPM,setAmPm] = useState('');

  //Frankfurt: UTC+1 (Central European Time)
  //Offset from IST: UTC+1 - UTC+5:30 = -4:30 hours

  const cityData = {
    'New York': {
      timezoneOffset: -9 * 60 - 30 // total hours-1 * 60 -30 Example offset in minutes
    },
    'Frankfurt': {
      timezoneOffset: -3 * 60 - 30 
    },
    'Helsinki': {
      timezoneOffset: -2 * 60 - 30 
    },
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const cityOffset = cityData[city]?.timezoneOffset || 0;
      const adjustedTime = new Date(now.getTime() + cityOffset * 60000);
      const hour = adjustedTime.getHours();
      setHour(formatTime(hour));
      setMinute(formatTime(adjustedTime.getMinutes()));
      setAmPm(ampm(hour))
    };
    // Call the function immediately to set the initial time
    updateDateTime();
    // Update the time every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [city]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time.toString();
  }

  function ampm(time){
    return time >12 ? "PM" : "AM"
  }
  return (
    <div className="p-8">
      <h1 className="font-inter font-bold text-3xl dark:text-white">{city}</h1>
      <div className="p-2 rounded-md shadow-sm shadow-black dark:shadow-white flex gap-1 w-fit items-baseline">
        <h1 className="font-inter font-bold text-3xl dark:text-white">{currentHour}</h1>
        <h1 className="font-inter font-bold text-3xl dark:text-white">:</h1>
        <h1 className="font-inter font-bold text-3xl dark:text-white">{currentMinute}</h1>
        <h1 className="font-inter font-bold text-3xl dark:text-white">{currentAmPM}</h1>
      </div>
    </div>
  )
}
