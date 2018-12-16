import React from 'react';
import './FixedBlock.css';
import Subscribe from './Subscribe';
import FreeShipping from './FreeShipping';
import ToUp from './ToUp';

const FixedBlock = () => {
    return (
        <div className="footer__fixed-block">
            <Subscribe />
            <FreeShipping />
            <ToUp scrollStepInPx="50" delayInMs="16.66" />
        </div>
    )
};

export default FixedBlock;