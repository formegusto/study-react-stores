import CounterComponent from 'contextAPI/components/CounterComponent';
import { CounterProvider } from 'contextAPI/contexts/counter';
import { SampleProvider } from 'contextAPI/contexts/sample';
import React from 'react';
import LeftPane from './contextAPI/containers/LeftPane';
import RightPane from './contextAPI/containers/RightPane';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }), 
  children
);

function App() {
  return (
    <AppProvider
      contexts = {[ SampleProvider, CounterProvider]}>
        <div className="panes">
          <LeftPane />
          <RightPane />
        </div>
        <div>
          <CounterComponent />
        </div>
    </AppProvider>  
  );
}

export default App;