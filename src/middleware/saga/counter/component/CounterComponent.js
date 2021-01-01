import React from 'react';

function CounterComponent({count, increase, decrease}) {
    return (
        <>
            <h1>{count}</h1>
            <button onClick={(e) => increase()}>+1</button>
            <button onClick={(e) => decrease()}>-1</button>
        </>
    );
}

export default CounterComponent;