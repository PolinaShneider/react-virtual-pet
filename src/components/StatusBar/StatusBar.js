import React from 'react';
import './StatusBar.css';

function StatusBar({ label, value }) {
    return (
        <div className="status-bar">
            <label>{label}: </label>
            <div className="progress-container">
                <progress value={value} max="100"></progress>
                <span className="progress-text">{value}%</span>
            </div>
        </div>
    );
}

export default StatusBar;
