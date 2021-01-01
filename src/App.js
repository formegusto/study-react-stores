// import CounterContainer from 'mobx/containers/CounterContainer';
import ThunkContainer from 'middleware/thunk/containers/ThunkContainer';
import React from 'react';
import CounterContainer from 'middleware/saga/counter/container/CounterContainer'
import ApiContainer from 'middleware/saga/useApi/container/ApiContainer';

function App() {
  return (
    <div>
      <ApiContainer />
      <ThunkContainer />
    </div>
  );
}

export default App;