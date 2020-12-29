// import CounterContainer from 'mobx/containers/CounterContainer';
import ThunkContainer from 'middleware/redux/containers/ThunkContainer';
import React from 'react';
import CounterContainer from 'redux/containers/CounterContainer';

function App() {
  return (
    <div>
      <ThunkContainer />
    </div>
  );
}

export default App;