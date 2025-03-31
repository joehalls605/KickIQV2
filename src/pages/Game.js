import React, { useState, useEffect, useContext } from 'react';
import Question from '../components/Question';
import footballersContext from '../context/footballersContext';

const Game = ({ league }) => {
    const { currentFootballerData } = useContext(footballersContext);
    console.log(currentFootballerData);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [filteredFootballers, setFilteredFootballers] = useState([]);

    // Filter footballers when the league changes
    useEffect(()=>{
        const filtered = currentFootballerData.filter(
            (footballer) => footballer.league === league
        );
        setFilteredFootballers(filtered);
    }, [league, currentFootballerData])

    console.log("footballer after filtering" + filteredFootballers);
    const handleNextQuestion = () => {
        setQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div>
            <h1>{league}</h1>
            <Question
                filteredFootballers={filteredFootballers}
                league={league}
                questionIndex={questionIndex}
                handleNextQuestion={handleNextQuestion}
            />
        </div>
    );
};

export default Game;
