function ButtonEventFunction({ buttonEvent, setButtonEvent }) {

    const handleClick = () => {
        setButtonEvent(prevButtonEvent => {
            return prevButtonEvent === 'Hello World' ? 'Hello ADAM' : 'Hello World';
          });
    };

    return ( 
        <button onClick={handleClick}>{buttonEvent}</button>
     );
};

export default ButtonEventFunction;