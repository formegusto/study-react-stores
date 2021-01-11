import React, { createContext, useCallback, useState } from 'react';

const Context = createContext();

const { Provider, Consumer: SampleConsumer } = Context;

function SampleProvider({children}) {
    const [state, setState] = useState({
        value: '기본값입니다.'
    });

    const actions = {
        setValue: useCallback((value) => {
            setState({value})
        },[setState])
    }

    const value = { state, actions };

    return (
        <Provider value={value}>
            {children}
        </Provider>
    )
}

export {
    SampleProvider,
    SampleConsumer,
};