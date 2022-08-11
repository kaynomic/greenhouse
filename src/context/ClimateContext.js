// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { useContext, useState, createContext } from "react";

export const ClimateContext = createContext();

export function ClimateProvider(props) {
    const [temp, setTemp] = useState(50);
    const [humidity, setHumidity] = useState(40);

    return (
        <ClimateContext.Provider value={{temp, setTemp, humidity, setHumidity}}>
            {props.children}
        </ClimateContext.Provider>
    )
}

export const useTemp = () => {
    const { temp, setTemp } = useContext(ClimateContext)
    return { temp, setTemp }
}

export const useHumidity = () => {
    const { humidity, setHumidity } = useContext(ClimateContext)
    return { humidity, setHumidity }
}
