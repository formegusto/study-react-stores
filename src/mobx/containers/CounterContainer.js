import { inject, observer } from 'mobx-react';
import Counter from 'mobx/components/Counter';
import React from 'react';

function CounterContainer({ count, increase, decrease}) {
    return (
        <Counter
            count={count}
            increase={increase}
            decrease={decrease} />
    );
}

export default inject(({ counterStore }) => ({
    count: counterStore.count,
    increase: counterStore.increase,
    decrease: counterStore.decrease,
}))(observer(CounterContainer));