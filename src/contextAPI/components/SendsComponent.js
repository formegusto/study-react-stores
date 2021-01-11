import React, { useCallback, useState } from 'react';

function SendsComponent({value, setValue}) {
    const [input, setInput] = useState(value);

    const handleChange = useCallback((e) => {
        setInput(e.target.value)   
    }, [setInput]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        setValue(input);
    }, [input, setValue]);

    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange}/>
            <button type="submit">설정</button>
        </form>
    )
}

export default SendsComponent;