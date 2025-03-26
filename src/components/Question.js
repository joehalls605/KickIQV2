import React, { useState } from 'react';
import Hint from './Hint';
import ButtonGrid from './/ButtonGrid';
import Timer from './Timer';
import Score from './Score';
import useFootballerButtons from '../hooks/use-footballer-buttons';

const Question = ({currentFootballerData, league}) => {

    // CORRECT FOOTBALLER FOR QUESTION
    // PASS CORRECT FOOTBALLER INTO BUTTONGRID
    // PASS CORRECT FOOTBALLER INTO HINT

    // FILTERED FOOTBALLER BY LEAGUE
    const footballersByLeague = currentFootballerData.filter((footballer) => {
        return footballer.league === league;
    });

    const {correctFootballer, footballerButtons } = useFootballerButtons(footballersByLeague);

    console.log(correctFootballer, footballerButtons);


    return (
        <div>
            <Hint correctFootballer={correctFootballer} />
            <ButtonGrid footballerButtons={footballerButtons} />
            <Timer/>
            <Score/>
        </div>
    )
}

export default Question;
