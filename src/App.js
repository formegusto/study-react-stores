// import CounterContainer from 'mobx/containers/CounterContainer';
import ThunkContainer from 'middleware/thunk/containers/ThunkContainer';
import React from 'react';
// import CounterContainer from 'middleware/saga/counter/container/CounterContainer'
// import ApiContainer from 'middleware/saga/useApi/container/ApiContainer';
import CounterContainer from 'mobx/containers/CounterContainer';
import ApiContainer from 'mobx/containers/ApiContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <ApiContainer />
    </div>
  );
}

export default App;