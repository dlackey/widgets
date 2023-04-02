import { useEffect, useState } from 'react';
import Beep from 'browser-beep';

const INTERVAL = 120000;

const beep = Beep({ frequency: 830, interval: INTERVAL });

function Timer() {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Math.max(time - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  function handleClick() {
    beep(2);
    setTime(INTERVAL / 1000);
  }

  return (
    <div onClick={handleClick}>{time}</div>
  );
}

export default Timer;
