import { useEffect, useState } from 'react';

const useFootballerOptions = (filteredFootballers, questionIndex) => {
    const [correctFootballer, setCorrectFootballer] = useState(null);
    const [footballerOptions, setFootballerOptions] = useState([]);

    useEffect(() => {
        if (filteredFootballers.length < 4) {
            console.warn("Not enough footballers to generate options");
            return;
        }

        const generateFootballerOptions = () => {
            const randomIndex = Math.floor(Math.random() * filteredFootballers.length);
            const newCorrectFootballer = filteredFootballers[randomIndex];

            const shuffledRemainingFootballers = filteredFootballers
                .filter((footballer) => footballer.name !== newCorrectFootballer.name)
                .sort(() => Math.random() - 0.5);

            const newFootballerOptions = [newCorrectFootballer, ...shuffledRemainingFootballers.slice(0, 3)]
                .sort(() => Math.random() - 0.5);

            // Only update state if the data has actually changed

            // setting correct footballer for the hint
            setCorrectFootballer(newCorrectFootballer);
            // footballer options for the buttons
            setFootballerOptions(newFootballerOptions);
        };

        generateFootballerOptions();
    }, [filteredFootballers, questionIndex]); // Runs only when league or question index changes

    return { correctFootballer, footballerOptions };
};

export default useFootballerOptions;
