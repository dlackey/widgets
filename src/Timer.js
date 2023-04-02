import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Beep from 'browser-beep';

const INTERVAL = 120000;

const beep = Beep({ frequency: 830, interval: INTERVAL });

function Timer() {
  const [time, setTime] = useState(0);
  const text = time.toString().padStart(3, '0');
  
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
    <Box onClick={handleClick}>
      <Typography variant="h1">{text}</Typography>
    </Box>
  );
}

export default Timer;
