import React from 'react';
import '../styles/error.css';

const Error = () => {
    return (
        <div className="Error">
            <p>
                Activate location permission <i className="fas fa-map-marker-alt"></i> to continue
            </p>
        </div>
    );
};

export default Error;