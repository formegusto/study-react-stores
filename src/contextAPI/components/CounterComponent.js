import { counterWrap } from 'contextAPI/contexts/counter';
import React from 'react';

function CounterComponent({value, increase, decrease}) {
    console.log(value);
    console.log(increase);
    console.log(decrease);
    return (
        <>
            <h1>{value}</h1>
            <button type="button" onClick={() => increase()}>+</button>
            <button type="button" onClick={() => decrease()}>-</button>
        </>
    );
}

export default counterWrap(CounterComponent);