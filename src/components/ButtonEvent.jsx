function ButtonEventFunction({ buttonEvent, setButtonEvent }) {

    const handleClick = () => {
        setButtonEvent(prevButtonEvent => {
            return prevButtonEvent === 'Hello World' ? 'Hello ADAM' : 'Hello World';
          });
    };

    return ( 
        <div className="bootcamp-styling">
            <h2>Button Event</h2>
            <button onClick={handleClick}>{buttonEvent}</button>
        </div>
     );
};

export default ButtonEventFunction;