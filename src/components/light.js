import React, { useState } from 'react';
import './light.css';

const Light = (props) => {
    const [color, setColor] = useState('#666666');

    const onSwitch = () => {
        console.log(props.status);
        (props.status === 'OFF') ? setColor('#ff6600') : setColor('#666666');
        props.onSwitch();
    }

    return (
        <div className='container'>
            <div className="circle" style={{ background: color }}>
            </div>
            <div className="switch">
                <button onClick={onSwitch}>{props.status}</button>
            </div>
        </div>
    );
}

export default Light;