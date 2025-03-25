import React, { useState } from 'react';
import Homepage from './pages/Homepage';
import Game from './pages/Game';
import { Provider } from './context/footballersContext';

const App = () => {

    // STATE VARIABLES
    const [gameActive, setGameActive] = useState(false);

    const startGameHandler = () =>{
        setGameActive(true);
    }

    if(!gameActive){
        return(
            <Homepage startGameHandler={startGameHandler}/>
        )
    }
    return(
        <Provider>
        <Game/>
        </Provider>
    )
}

export default App;