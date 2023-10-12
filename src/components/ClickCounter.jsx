function ClickCounterFunction({ clickCounter, setClickCounter }) {
    
    const handleClick = () => {
        setClickCounter(prevClickCounter => prevClickCounter + 1);
    };


    return ( 
        <div className="bootcamp-styling">
            <h2>Click counter</h2>
            <h3>{clickCounter}</h3>
            <button onClick={handleClick}>Click to count</button>
        </div>
     );
};

export default ClickCounterFunction;