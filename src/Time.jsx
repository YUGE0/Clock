import {useState,useEffect,React} from 'react'

export default function Time() {
  const [currentHour, setHour] = useState('');
  const [currentMinute, setMinute] = useState('');
  const [currentAmPM,setAmPm] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      setHour(formatTime(hour));
      setMinute(formatTime(now.getMinutes()));
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
    <div className="px-6 rounded-md shadow-sm shadow-black dark:shadow-white flex gap-1 w-fit items-baseline">
      <h1 className="font-inter font-bold text-3xl dark:text-white">{currentHour}</h1>
      <h1 className="font-inter font-bold text-3xl dark:text-white">:</h1>
      <h1 className="font-inter font-bold text-3xl dark:text-white">{currentMinute}</h1>
      <h1 className="font-inter font-bold text-3xl dark:text-white">{currentAmPM}</h1>
    </div>
  )
}
