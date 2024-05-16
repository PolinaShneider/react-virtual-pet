import React, {useEffect, useState} from 'react';
import './Pet.css';
import StatusBar from "../StatusBar/StatusBar";

function Pet({ health, happiness, changePet, setChangePet }) {
    const [pet, setPet] = useState('🐶');
    const getRandomPet = () => {
        const pets = ['🐱', '🐶', '🐠', '🦜', '🐷'];
        const randomIndex = Math.floor(Math.random() * pets.length);
        return pets[randomIndex];
    }
    useEffect(() => {
        setPet(getRandomPet())
        setChangePet(false);
    }, [changePet]);
    return (
        <div className="pet-container">
            <div className="pet">{pet}</div>
            <div className="pet-container__controls">
                <StatusBar label="Health" value={health}/>
                <StatusBar label="Happiness" value={happiness}/>
            </div>
        </div>
    );
}

export default Pet;
