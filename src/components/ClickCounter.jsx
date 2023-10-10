function ClickCounterFunction({ clickCounter, setClickCounter }) {
    
    const handleClick = () => {
        setClickCounter(prevClickCounter => prevClickCounter + 1);
    };


    return ( 
        <div>
            <h2>{clickCounter}</h2>
            <button onClick={handleClick}>Click to count</button>
        </div>
     );
};

export default ClickCounterFunction;