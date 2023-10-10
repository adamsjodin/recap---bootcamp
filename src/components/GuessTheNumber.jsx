import { useState, useRef } from 'react'

function GuessTheNumberFunction() {
    const [guessedNumber, setGuessedNumber] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const [message, setMessage] = useState('')

    const randomNumber = useRef(Math.floor(Math.random() * 11));

    const handleChange = () => {
        const guessedValue = parseInt(numberInput);
        setGuessedNumber(guessedValue);

        if (guessedValue > randomNumber.current) {
            setMessage('You guessed to high, try again')
        } else if (guessedValue < randomNumber.current) {
            setMessage('You guessed to low, TRY AGAIN')
        } else if (guessedValue === randomNumber.current) {
            setMessage('CORRECT, YOU WON!!')
        };
        setNumberInput('');
    };

    const handleNumberInput = (e) => {
        setNumberInput(e.target.value);
    };

    return (
        <div>
            <h3>Guess a number between 0-10</h3>
            <input
                type="text"
                placeholder="Add a number to guess"
                value={numberInput}
                onChange={handleNumberInput}
            />
            <button onClick={handleChange}>Click to guess</button>
            <h3>{message}</h3>
        </div>
    );
};

export default GuessTheNumberFunction;