import { useState, useEffect, useRef } from 'react'

function GuessTheNumberFunction() {
    const [guessedNumber, setGuessedNumber] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const [message, setMessage] = useState('');
    const [attempts, setAttempts] = useState(0); // Ny tillståndsvariabel för att räkna antalet gissningar
    
    const maxAttempts = 3; // Max antal tillåtna gissningar

    const randomNumber = useRef(Math.floor(Math.random() * 11));

    useEffect(() => {
        if (attempts >= maxAttempts) {
            setMessage('Sorry, you reached the max number of attempts');
        }
    }, [attempts]); // Övervaka ändringar i 'attempts'

    const handleChange = () => {
        const guessedValue = parseInt(numberInput);
        setGuessedNumber(guessedValue);
        setAttempts(attempts + 1)

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
        <div className="bootcamp-styling, ">
            <h2>Guess the number</h2>
            <h3>Guess a number between 0-10. You have 3 attempts</h3>
            <input
                type="text"
                placeholder="Add a number to guess"
                value={numberInput}
                onChange={handleNumberInput}
                disabled={attempts >= maxAttempts} // Inaktivera input-fältet om max antal gissningar är uppnått

            />
            <button onClick={handleChange} disabled={attempts >= maxAttempts}>Click to guess</button>
            <h3>{message}</h3>
        </div>
    );
};

export default GuessTheNumberFunction;