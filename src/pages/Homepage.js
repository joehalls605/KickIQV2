import React from 'react';

const Homepage = ({startGameHandler}) => {

    return (
        <div>
            <h1>Homepage</h1>
            <h2>Time to test and enhance your football knowledge 💡</h2>
            <button onClick={startGameHandler}>Premier League</button>
            <button>LaLiga</button>
        </div>
    )
}

export default Homepage;