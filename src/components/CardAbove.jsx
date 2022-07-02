import React from 'react';

const CardAbove = (props) => {
    return (
        <div className='Cardother'>
            <p><i className="fas fa-tint"></i>{" Humidity "}{props.humidity}{"%"}</p>
            <p><i className="fas fa-thermometer-half"></i>{" Pressure "}{props.pressure}{" hPa"}</p>
        </div>
    );
};

export default CardAbove;