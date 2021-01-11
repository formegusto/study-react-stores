import { SampleConsumer } from 'contextAPI/contexts/sample';
import React from 'react';
import SendsComponent from '../components/SendsComponent';

function LeftPane() {
    return (
        <SampleConsumer>
            {
                (sample) => (
                    <div className="pane">
                        <SendsComponent 
                            value={sample.state.value}
                            setValue={sample.actions.setValue}
                        />
                    </div>
                )
            }
        </SampleConsumer>
    )
}

export default LeftPane;