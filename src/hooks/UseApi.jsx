import React, { useEffect } from 'react';
import { useState} from 'react';
import axios from 'axios';

const UseApi = () => {

    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        const handleError=()=>{
            setIsLoading(true);
        }
        const succes = position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f88b48477acd7643e2ac2e52fbeb7c38`)
                .then(res => setWeather(res.data));
        }
        navigator.geolocation.getCurrentPosition(succes, handleError)
    }, []);

    useEffect(() => {
        window.addEventListener('Click', _ => {window.location.reload();})
    }, []);

    return {weather, isLoading};
};

export default UseApi;
