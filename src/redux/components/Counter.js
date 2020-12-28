import React from 'react';

function Counter({value, onIncrement, onDecrement, onIncrementwo}) {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={() => onIncrement()}>+</button>
            <button onClick={() => onDecrement()}>-</button>
            <button onClick={() => onIncrementwo(2)}>+2</button>
        </div>
    );
}

export default Counter;