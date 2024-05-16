import React from 'react';
import './Controls.css';

const ControlButton = ({ onClick, children, disabled }) => (
    <button onClick={onClick} disabled={disabled}>
        {children}
    </button>
);

function Controls({ onFeed, onPlay, onSleep, setIsPlaying, isPlaying }) {
    return (
        <div className="controls">
            <div className="controls__play">
                <ControlButton onClick={onFeed} disabled={!isPlaying}>🍔 Feed</ControlButton>
                <ControlButton onClick={onPlay} disabled={!isPlaying}>⚽ Play</ControlButton>
                <ControlButton onClick={onSleep} disabled={!isPlaying}>😴 Sleep</ControlButton>
            </div>
            <ControlButton
                onClick={() => setIsPlaying(!isPlaying)}
                className="controls__restart">
                {isPlaying ? 'Stop' : 'Start / Resume'}
            </ControlButton>
        </div>
    );
}

export default Controls;
