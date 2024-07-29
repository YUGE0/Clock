import {useEffect,useState,React} from 'react'

export default function Minute() {
  const [currentMinute, setMinute] = useState('');
  const [currentDay, setDay] = useState('');
  const [currentDate, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setMinute(now.getMinutes());
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
    <div className="shadow-black shadow-md p-2 rounded-lg">
        <div className="flex justify-around">
          <h1 className="xl:text-Big md:text-Mid font-Sa font-light">{currentMinute}</h1>
        </div>
        <div className="px-10 flex justify-between">
          <h1 className="pb-2 text-5xl font-bold font-inter">{currentDay}</h1>
          <h1 className="pb-2 text-5xl font-bold font-inter">{currentDate}</h1>
        </div>
    </div>
  )
}
