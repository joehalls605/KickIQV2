import React, { useState } from 'react';
import Hint from './Hint';
import ButtonGrid from './/ButtonGrid';
import Timer from './Timer';
import Score from './Score';


const Question = ({currentFootballerData}) => {

    // CORRECT FOOTBALLER FOR QUESTION
    // PASS CORRECT FOOTBALLER INTO BUTTONGRID
    // PASS CORRECT FOOTBALLER INTO HINT






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
