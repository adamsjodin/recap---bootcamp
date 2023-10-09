import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [buttonEvent, setButtonEvent] = useState('Hello World');
  const [clickCounter, setClickCounter] = useState(0);
  const [inputDuplication, setInputDuplication] = useState('');

  const [countDownTimer, setCountDownTimer] = useState(5);
  const [countDownMessage, setCountDownMessage] = useState('');

  const [colorPicker, setColorPicker] = useState('');

  function buttonEventFunction() {
    setButtonEvent(prevButtonEvent => {
      return prevButtonEvent === 'Hello World' ? 'Hello Adam' : 'Hello World';
    });
  };

  function ClickCounterFunction() {
    setClickCounter(prevClickCounter => prevClickCounter + 1);
  };

  function textTypeFunction(e) {
    setInputDuplication(e.target.value);
  };

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

    function changeColorFunction(e) {
      setColorPicker(e.target.value)
    }

  return (
    <div className="App">
      <h1>BOOTCAMP</h1>
      <section className='events'>
        <button onClick={buttonEventFunction}>{buttonEvent}</button>

        <h2>{clickCounter}</h2>
        <button onClick={ClickCounterFunction}>Click to count</button>
       
        <input 
          type="text" 
          placeholder='Type here' 
          onChange={textTypeFunction} 
          value={inputDuplication}
        />
        <h2>{inputDuplication}</h2>
        <h2>{countDownTimer} seconds left</h2>
        <p>{countDownMessage}</p>

        <div style={{backgroundColor: colorPicker, padding: 100}}>
        <input 
          style={{padding: 10}}
          type="text"
          placeholder='Enter background color'
          onChange={changeColorFunction}
          />
        </div>

      </section>
    </div>
  )
}

export default App
