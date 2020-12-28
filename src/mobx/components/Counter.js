import React from 'react';

function Counter({ count, increase, decrease }) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => increase()}>+</button>
            <button onClick={() => decrease()}>-</button>
        </div>
    );
}

export default Counter;