import React from 'react';
import UseApi from '../hooks/UseApi'

const CardBelow = () => {
    
    const {weather} = UseApi();

    return (
        <div className='Cardoyher'>
            <p><i className="fas fa-cloud"></i>{" Clouds "}{weather?.clouds.all}{"%"}</p>
            <p><i className="fas fa-wind"></i>{" Wind speed "}{weather?.wind.speed}{" m/s"}</p>
        </div>
    );
};

export default CardBelow;