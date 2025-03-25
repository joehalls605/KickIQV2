import { createContext, useState } from 'react';
import FootballerData from '../data/FootballerData';

// Creating a custom context to manage and share state across components
const FootballersContext = createContext();

// The Provider component will wrap parts of the app and provide context data

function Provider({children}){
    const [currentFootballerData, setCurrentFootballerData] = useState(FootballerData);

    const valueToShare = {
        currentFootballerData,
        setCurrentFootballerData
    };

    return (
        <FootballersContext.Provider value={valueToShare}>
            {children}
        </FootballersContext.Provider>
    )
}

export { Provider }
export default FootballersContext;

