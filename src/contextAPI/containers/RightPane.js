import ReceivesComponent from 'contextAPI/components/ReceivesComponent';
import { SampleConsumer } from 'contextAPI/contexts/sample';
import React from 'react';

function RightPane() {
    return (
        <SampleConsumer>
            {
                (sample) => (
                    <div className="pane">
                        <ReceivesComponent value={sample.state.value} />
                    </div>
                )
            }
        </SampleConsumer>
    )
}

export default RightPane;