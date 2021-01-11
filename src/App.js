import { SampleProvider } from 'contextAPI/contexts/sample';
import React from 'react';
import LeftPane from './contextAPI/containers/LeftPane';
import RightPane from './contextAPI/containers/RightPane';

function App() {
  return (
    <SampleProvider>
      <div className="panes">
        <LeftPane />
        <RightPane />
      </div>
    </SampleProvider>
  );
}

export default App;