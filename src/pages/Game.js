import React, {useContext}from 'react';
import Question from '../components/Question';
import footballersContext from '../context/footballersContext';

const Game = () => {

    const {currentFootballerData, setCurrentFootballerData} = useContext(footballersContext);
    console.log(currentFootballerData);
    return(
        <div>
            <h1>Game Page</h1>
            <Question />
        </div>
    )
}

export default Game;