import React from 'react';

const Homepage = ({gameActiveHandler, setLeague }) => {

    const handleLeague = (league) => {
        setLeague(league);
        gameActiveHandler();
    }

    return (
        <div>
            <h1>Homepage</h1>
            <h2>Time to test and enhance your football knowledge 💡</h2>
            <button onClick={() => handleLeague("Premier League")}>Premier League</button>
            <button onClick={() => handleLeague("La Liga")}>La Liga</button>

        </div>
    )
}

export default Homepage;