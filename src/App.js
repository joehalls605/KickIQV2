import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import Game from './pages/Game';
import { Provider } from './context/footballersContext';

const App = () => {

    // STATE VARIABLES
    const [gameActive, setGameActive] = useState(false);
    const [league, setLeague] = useState("");

    const gameActiveHandler = () =>{
        setGameActive(true);
    }

    if(!gameActive){
        return(
            <Homepage gameActiveHandler={gameActiveHandler} setLeague={setLeague}/>
        )
    }
    return(
        <Provider>
        <Game league={league}/>
        </Provider>
    )
}

export default App;