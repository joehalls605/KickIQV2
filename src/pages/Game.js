import React, {useContext}from 'react';
import Question from '../components/Question';
import footballersContext from '../context/footballersContext';

const Game = ({league}) => {

    const {currentFootballerData, setCurrentFootballerData} = useContext(footballersContext);

    console.log(currentFootballerData);
    return(
        <div>
            <h1>{league}</h1>
            <Question currentFootballerData={currentFootballerData} league={league}/>
        </div>
    )
}

export default Game;