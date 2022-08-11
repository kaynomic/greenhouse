import './ClimateStats.css';
import { useTemp, useHumidity } from '../../context/ClimateContext'
import { useState, useEffect } from 'react';

function ClimateStats() {

  const { temp } = useTemp();
  const { humidity } = useHumidity();

  const [desiredTemp, setDesiredTemp] = useState(50);
  const [desiredHumidity, setDesiredHumidity] = useState(40);

  useEffect(() => {
    const tempTimeout = setTimeout(() => {
      if (desiredTemp < temp) setDesiredTemp(prevDesiredTemp => ++prevDesiredTemp)
      if (desiredTemp > temp) setDesiredTemp(prevDesiredTemp => --prevDesiredTemp)
    }, 1000);

    return () => {
      console.log("tempTimeout is clear")
      clearTimeout(tempTimeout)
    }
  }, [temp, desiredTemp, setDesiredTemp])

  useEffect(() => {
    const humidityTimeout = setTimeout(() => {
      if (desiredHumidity < humidity) setDesiredHumidity(prevDesiredHumidity => prevDesiredHumidity + 2)
      if (desiredHumidity > humidity) setDesiredHumidity(prevDesiredHumidity => prevDesiredHumidity - 2)
    }, 1000);

    return () => {
      console.log("humidityTimeout is clear")
      clearTimeout(humidityTimeout)
    }
  }, [humidity, desiredHumidity, setDesiredHumidity])

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {desiredTemp}°F
      </div>
      <div className="humidity">
        Humidity {desiredHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
