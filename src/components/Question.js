import React, { useState } from 'react';
import Hint from './Hint';
import ButtonGrid from './/ButtonGrid';
import Timer from './Timer';
import Score from './Score';
import useFootballerOptions from '../hooks/useFootballerOptions';

const Question = ({filteredFootballers, handleNextQuestion, questionIndex}) => {
    const [score, setScore] = useState(0);
    let {correctFootballer, footballerOptions } = useFootballerOptions(filteredFootballers, questionIndex);

    const handleAnswerClick = (clickedFootballer) => {
        console.log(clickedFootballer.name, correctFootballer);
        if(clickedFootballer && correctFootballer && clickedFootballer.name === correctFootballer.name){
            setScore(prevScore => prevScore + 1);
        }
        handleNextQuestion();
    }

    return (
        <div>
            <h4>Score: {score}</h4>
            <Hint correctFootballer={correctFootballer} />
            <ButtonGrid footballerOptions={footballerOptions} handleAnswerClick={handleAnswerClick} />
            <button onClick={handleNextQuestion}>Next Question</button>
            <Timer/>
            <Score/>
        </div>
    )
}

export default Question;
