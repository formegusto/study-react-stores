import { hocSample } from 'contextAPI/contexts/sample';
import React from 'react';
import SendsComponent from '../components/SendsComponent';

function LeftPane({value, setValue}) {
    return (
        <div className="pane">
            <SendsComponent 
                value={value}
                setValue={setValue}
            />
        </div>
    )
}

export default hocSample(LeftPane);