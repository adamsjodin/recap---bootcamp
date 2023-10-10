import './App.css'
import { useState } from 'react'
import ButtonEventFunction from './components/ButtonEvent';
import ClickCounterFunction from './components/ClickCounter';
import InputDuplicationFunction from './components/InputDuplication';
import CountDownTimerFunction from './components/CountDownTimer';
import ColorPickerFunction from './components/ColorPicker';
import GuessTheNumberFunction from './components/GuessTheNumber';

function App() {
  const [buttonEvent, setButtonEvent] = useState('Hello World');
  const [clickCounter, setClickCounter] = useState(0);
  const [inputDuplication, setInputDuplication] = useState('');

  const [countDownTimer, setCountDownTimer] = useState(5);
  const [countDownMessage, setCountDownMessage] = useState('');

  const [colorPicker, setColorPicker] = useState('');
  const [suggestedColor, setSuggestedColor] = useState([]);


  return (
    <div className="App">
      <h1>BOOTCAMP</h1>
      <section className='events'>
        <ButtonEventFunction buttonEvent={buttonEvent} setButtonEvent={setButtonEvent}/>
        <ClickCounterFunction clickCounter={clickCounter} setClickCounter={setClickCounter}/>
        <InputDuplicationFunction inputDuplication={inputDuplication} setInputDuplication={setInputDuplication}/>
        {/* <CountDownTimerFunction 
          countDownTimer={countDownTimer}
          setCountDownTimer={setCountDownTimer}  
          countDownMessage={countDownMessage}
          setCountDownMessage={setCountDownMessage}
        /> */}
        <ColorPickerFunction 
          colorPicker={colorPicker}
          setColorPicker={setColorPicker}
          suggestedColor={suggestedColor}
          setSuggestedColor={setSuggestedColor}
        />
        <GuessTheNumberFunction guessedNumber={guessedNumber} setGuessedNumber={setGuessedNumber}/>
      </section>
    </div>
  )
}

export default App
