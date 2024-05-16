import React, { useState, useCallback, useEffect } from 'react';
import './Game.css';
import Pet from "../Pet/Pet";
import Controls from "../Controls/Controls";

function Game() {
    const [health, setHealth] = useState(100);
    const [happiness, setHappiness] = useState(100);
    const [isPlaying, setIsPlaying] = useState(false);
    const [changePet, setChangePet] = useState(false);

    // Helper function to manage value changes with constraints
    const changeValue = useCallback((currentValue, change, increase = true) => {
        let newValue = increase ? currentValue + change : currentValue - change;
        newValue = Math.max(0, Math.min(100, newValue)); // Ensure the value is between 0 and 100
        return Math.round(newValue);
    }, []);

    // Dedicated method to increase values
    const increaseValue = useCallback((currentValue, amount) => {
        return changeValue(currentValue, amount, true);
    }, [changeValue]);

    // Dedicated method to decrease values
    const decreaseValue = useCallback((currentValue, amount) => {
        return changeValue(currentValue, amount, false);
    }, [changeValue]);

    const resetGame = () => {
        setChangePet(true); // Change pet avatar
        setIsPlaying(false); // Stop game
        setHealth(100); // Reset health
        setHappiness(100); // Reset happiness
    }

    useEffect(() => {
        if (health === 0) {
            alert("Game over!");
            resetGame();
        }
    }, [health]);

    useEffect(() => {
        if (!isPlaying) {
            return;
        }

        const interval = setInterval(() => {
            setHealth(health => decreaseValue(health, 5));
            setHappiness(happiness => decreaseValue(happiness, 10));
        }, 500);

        return () => clearInterval(interval);
    }, [isPlaying, decreaseValue]);  // Reacting to changes in isPlaying

    const feedPet = () => {
        setHealth(health => increaseValue(health, 10));
    };

    const playWithPet = () => {
        setHappiness(happiness => increaseValue(happiness, 10));
    };

    const letPetSleep = () => {
        setHealth(health => increaseValue(health, 10));
    };

    return (
        <div className="game-container">
            <Pet health={health} happiness={happiness} changePet={changePet} setChangePet={setChangePet}/>
            <Controls
                onFeed={feedPet}
                onPlay={playWithPet}
                onSleep={letPetSleep}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
        </div>
    );
}

export default Game;
