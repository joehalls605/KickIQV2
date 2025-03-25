import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import Game from './pages/Game';

const App = () => {

    // STATE VARIABLES
    const [gameActive, setGameActive] = useState(false);

    const activateGameHandler = () =>{
        setGameActive(true);
    }

    if(!gameActive){
        return(
            <Homepage activateGameHandler={activateGameHandler}/>
        )
    }
    return(
        <Game/>
    )
}

export default App;