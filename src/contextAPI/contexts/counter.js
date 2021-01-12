import React, { createContext, useState, useCallback } from 'react';

const Context = createContext();

const { Provider, Consumer: CounterConsumer } = Context;

function CounterProvider({children}) {
    const [state, setState] = useState({
        value: 0
    });

    const actions = {
        increase: useCallback(() => {
            setState({
                value: state.value + 1
            });
        }, [setState,state]),
        decrease: useCallback(() => {
            setState({
                value: state.value - 1
            });
        }, [setState,state])
    }

    const value = { state, actions }

    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
}

function counterWrap(WrapComponent) {
    return function CounterWrap(props) {
        return (
            <CounterConsumer>
                {
                    ({state, actions}) => (
                        <WrapComponent
                            value={state.value}
                            increase={actions.increase}
                            decrease={actions.decrease} />
                    )
                }
            </CounterConsumer>
        );
    }
}

export {
    CounterProvider,
    CounterConsumer,
    counterWrap
}