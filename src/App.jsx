import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [buttonEvent, setButtonEvent] = useState('Hello World');
  const [clickCounter, setClickCounter] = useState(0);
  const [inputDuplication, setInputDuplication] = useState('');

  const [countDownTimer, setCountDownTimer] = useState(5);
  const [countDownMessage, setCountDownMessage] = useState('');

  const [colorPicker, setColorPicker] = useState(["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"])

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
      </section>
    </div>
  )
}

export default App
