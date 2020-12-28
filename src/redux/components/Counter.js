import React from 'react';

function Counter({number, onIncrement, onDecrement, onIncrementwo}) {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => onIncrement()}>+</button>
            <button onClick={() => onDecrement()}>-</button>
            <button onClick={() => onIncrementwo(2)}>+2</button>
        </div>
    );
}

export default Counter;