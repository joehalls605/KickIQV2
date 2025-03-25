import React from 'react';

const Homepage = ({activateGameHandler}) => {

    return (
        <div>
            <h1>Time to test and enhance your football knowledge 💡</h1>
            <button onClick={activateGameHandler}>Premier League</button>
            <button>LaLiga</button>
        </div>
    )
}

export default Homepage;