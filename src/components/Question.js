import React, { useState } from 'react';
import Hint from './Hint';
import ButtonGrid from './/ButtonGrid';
import Timer from './Timer';
import Score from './Score';
import useFootballerOptions from '../hooks/useFootballerOptions';

const Question = ({filteredFootballers, handleNextQuestion, questionIndex}) => {

    const {correctFootballer, footballerOptions } = useFootballerOptions(filteredFootballers, questionIndex);

    console.log("these are the four footballers!" + correctFootballer, footballerOptions);

    return (
        <div>
            <Hint correctFootballer={correctFootballer} />
            <ButtonGrid footballerOptions={footballerOptions} />
            <button onClick={handleNextQuestion}>Next Question</button>
            <Timer/>
            <Score/>
        </div>
    )
}

export default Question;
