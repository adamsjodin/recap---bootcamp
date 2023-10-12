function InputDuplicationFunction({ inputDuplication, setInputDuplication }) {

    const handleChange = (e) => {
        setInputDuplication(e.target.value);
    }

    return (
        <div className="bootcamp-styling">
            <h2>Input Duplication</h2>
            <input
                type="text"
                placeholder='Type here'
                onChange={handleChange}
                value={inputDuplication}
            />
            <h2>{inputDuplication}</h2>
        </div>

    );
};

export default InputDuplicationFunction;