import {useEffect,useState,React} from 'react'

export default function Minute() {
  const [currentMinute, setMinute] = useState('');
  const [currentDay, setDay] = useState('');
  const [currentDate, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setMinute(formatTime(now.getMinutes()));
      setDay(getDayName(now.getDay()));
      setDate(now.getDate());
      //setMinute(formatTime(minute));
      //setDay(day)
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

  function getDayName(day) {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return days[day];
  }

  function formatDate(date) {
    return date.day
  }

  return (
    <div className="shadow-black dark:shadow-white/50 shadow-md p-2 rounded-lg xl:w-102 xl:h-102 lg:w-101 lg:h-101 md:w-100 md:h-100 w-99 h-99">
        <div className="flex justify-center">
          <h1 className="xl:text-Big lg:text-Mid md:text-Lit text-Ef font-Sa font-light dark:text-white">{currentMinute}</h1>
        </div>
        <div className="px-10 flex justify-between">
          <h1 className="pb-2 md:text-5xl text-3xl font-bold font-inter dark:text-white">{currentDay}</h1>
          <h1 className="pb-2 md:text-5xl text-3xl font-bold font-inter dark:text-white">{currentDate}</h1>
        </div>
    </div>
  )
}
