import { useEffect, useState } from 'react';

const useFootballerButtons = (footballersByLeague) => {

    const [correctFootballer, setCorrectFootballer] = useState(null);
    const [footballerButtons, setFootballerButtons] = useState([]);

    useEffect(()=> {
        const generateFootballerButtons = () => {

            if (footballersByLeague.length < 4) {
                console.warn("Not enough footballers to generate options");
                return { correctFootballer: null, footballerButtons: [] };
            }

            // Randomly select an index to pick the correct footballer from the filtered data
            const randomIndex = Math.floor(Math.random() * footballersByLeague.length);
            const correctFootballer = footballersByLeague[randomIndex];

            const shuffledRemainingFootballers = footballersByLeague.
            filter((footballer) => footballer.name !== correctFootballer.name
            ).sort(() => Math.random() - 0.5) // ?

            // Combine the correct footballer with three shuffled footballers
            const selectedFootballers = [correctFootballer, ...shuffledRemainingFootballers.slice(0,3)];
            // Shuffling the selected footballer order
            const shuffledSelectedFootballers = selectedFootballers.sort(() => Math.random() - 0.5);

            setCorrectFootballer(correctFootballer);
            setFootballerButtons(shuffledSelectedFootballers);
        };

        // Call the generateFootballerButtons function when the component mounts or the dependencies change
        generateFootballerButtons();
    }, footballersByLeague )
    return {correctFootballer, footballerButtons};
}

export default useFootballerButtons;