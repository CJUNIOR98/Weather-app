import React from 'react';
import { useState, useEffect } from 'react';
import UseApi from '../hooks/UseApi';
import Error from '../components/Error'
import Loading from '../components/Loading'
import CardBelow from './CardBelow';
import CardAbove from '../components/CardAbove'

const CardWeather = () => {

    const fund = [
        "https://i.gifer.com/Lx0q.gif",
        "https://i.gifer.com/QINK.gif",
        "https://i.gifer.com/6Bb.gif",
        "https://i.gifer.com/1ez9.gif",
        "https://i.gifer.com/5yp.gif",
        "https://i.gifer.com/7scx.gif",
        "https://i.gifer.com/yY8.gif",
        "https://i.gifer.com/5yb.gif"
    ];

    const [temp, setTemp] = useState([0, "°C"]);
    const [background, setBackgorund] = useState();
    const { weather, isLoading } = UseApi();

    document.body.style = `background: url(${background})
    no-repeat center center fixed;-webkit-background-size: cover;
    background-size: 100% 100%`;
    
    useEffect(() => {  
        setTemp([Math.round(weather?.main.temp - 273.15)," °C"]);
        changeBackground(weather?.weather[0].description);
   }, [weather?.main.temp,weather?.weather[0].description])

    const changeBackground = () => {
        let description = weather?.weather[0].description;
        if (description === "clear sky") {
            setBackgorund(fund[0]);
        } else if (description === "few clouds") {
            setBackgorund(fund[1]);
        } else if (description === "overcast clouds") {
            setBackgorund(fund[2])
        } else if (description === "broken clouds") {
            setBackgorund(fund[3])
        } else if (description === "mist") {
            setBackgorund[fund[4]]
        } else if (description === "Light rain") {
            setBackgorund(fund[5])
        } else if (description === "scattered clouds") {
            setBackgorund(fund[6])
        } else if (description === "snow") {
            setBackgorund(fund[7])
        } else if (description === "smoke") {
            setBackgorund(fund[4])
        } else if (description === "moderate rain") {
            setBackgorund(fund[5])
        }
    };

    const handleTemperature = () => {
        let value = 0;
        if (temp[1] === "°C") {
            value = (temp[0] * 1.8) + 32;
            setTemp([Math.round(value), "°F"]);
        } else {
            value = (temp[0] - 32) / 1.8;
            setTemp([Math.round(value), "°C"]);
        };
    };

    return (
        <>
            {isLoading ? (
                <div className='containerError'>
                    <Loading />
                    <Error />
                </div>
            ) : (
                <div className='containerGeneral'>
                    <CardAbove
                        humidity={weather?.main.humidity}
                        pressure={weather?.main.pressure}
                    />
                    <div className='Card'>
                        <h2>Weather App</h2>
                        <p>{weather?.name}, {weather?.sys.country}</p>
                        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt='' />
                        <p>{weather?.weather[0].description}</p>
                        <p>{temp[0] + temp[1]}</p>
                        <button onClick={handleTemperature} className='button'>
                            {temp[1] === " °C" ? ("Fahrenheit") : ("Celsius")}</button>
                    </div>
                    <CardBelow/>
                </div>
            )}
        </>
    );
};

export default CardWeather;