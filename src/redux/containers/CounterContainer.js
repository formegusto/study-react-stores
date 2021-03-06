import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrement, increment, incrementwo } from '../modules/actions';

function CounterContainer({number, increment, decrement, incrementwo}) {
    console.log("Rendering Container");
    const onIncrement = useCallback(() => {
        increment();
    },[increment]);

    const onDecrement = useCallback(() => {
        decrement();
    },[decrement]);

    const onIncrementwo = useCallback((amount) => {
        incrementwo(amount);
    },[incrementwo]);
    
    return (
        <Counter
            number={number}
            onIncrement={onIncrement}
            onDecrement={onDecrement} 
            onIncrementwo={onIncrementwo}
            />
    );
}

export default connect(
    state => ({ number: state.counter.number }),
    {increment, decrement, incrementwo }
)(CounterContainer);