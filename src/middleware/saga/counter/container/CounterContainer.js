import React from 'react';
import { connect } from 'react-redux';
import CounterComponent from '../component/CounterComponent';
import { decreaseAsync, increaseAsync } from '../module/action';

function CounterContainer({count, increase, decrease}) {
    return (
        <CounterComponent
            count = {count}
            increase = {increase}
            decrease = {decrease}
            />
    )
}

export default connect(
    state => ({count: state.counter}),
    {
        increase: increaseAsync,
        decrease: decreaseAsync,
    }
)(CounterContainer);