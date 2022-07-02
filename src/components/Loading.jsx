import React from 'react';
import "../styles/loading.css";

const Loading = () => {
    return (
        <div className="container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <p>Loanding...</p>
        </div>
    );
};

export default Loading;