import React, { useState } from 'react';
import Hint from './/Hint';
import ButtonGrid from './/ButtonGrid';
import Timer from './/Timer';
import Score from './/Score';


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
