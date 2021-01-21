import React from 'react';
import { useHistory } from 'react-router-dom';

const UseCallbackButtons = props => {
    console.log('render...');

    let history = useHistory();

    // Praticando o useHistory
    function goHome() {
        history.push("/")
    }

    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(18)}>+18</button>

            <button className="btn" onClick={() => goHome()}>Home</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons);