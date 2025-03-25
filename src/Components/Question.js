import React, { useState } from 'react';
import Hint from '../Components/Hint';
import ButtonGrid from '../Components/ButtonGrid';
import Timer from '../Components/Timer';
import Score from '../Components/Score';


const Question = () => {

    return (
        <div>
            <Hint />
            <ButtonGrid />
            <Timer/>
            <Score/>
        </div>
    )
}

export default Question;
