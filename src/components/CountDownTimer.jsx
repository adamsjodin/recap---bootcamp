import { useEffect } from 'react'


function CountDownTimerFunction({ 
    countDownTimer, 
    setCountDownTimer, 
    countDownMessage, 
    setCountDownMessage 
}) {
    useEffect(() => {
        const countDown = () => {
          if (countDownTimer >= 1) {
            setCountDownTimer(prevCountDownTimer => prevCountDownTimer - 1)
          } else {
            setCountDownMessage('Times up!')
          };
        };
    
        const timer = setInterval(countDown, 1000);
    
        return () => clearInterval(timer)
      }, [countDownTimer]);

    return (
        <div className='bootcamp-styling'>
            <h2>Countdown timer</h2>
            <h3>{countDownTimer} seconds left</h3>
            <p>{countDownMessage}</p>
        </div>
    );
}

export default CountDownTimerFunction;