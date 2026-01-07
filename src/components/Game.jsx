import React, { useState } from 'react';
import '../styles/game.css';

const gamesList = [
    {
        name: 'Colour Space',
        platform: 'Computer',
        url: 'https://html-classic.itch.zone/html/13242227/ChromaReflection/index.html'
    },
    {
        name: "Hell's Kichenette",
        platform: 'Computer',
        url: 'https://html-classic.itch.zone/html/13665555/index.html'
    },
];

export default function Game() {
    const [currentGame, setCurrentGame] = useState(gamesList[0]);

    return (
        <div className="game-section">
            <h1 className="game-title">{currentGame.name}</h1>
            <p className="game-platform">Platform: {currentGame.platform}</p>

            {/* Dropdown */}
            <div className="game-selector">
                <label htmlFor="game-select">Choose a game:</label>
                <select
                    id="game-select"
                    value={currentGame.name}
                    onChange={(e) =>
                        setCurrentGame(gamesList.find((g) => g.name === e.target.value))
                    }
                >
                    {gamesList.map((game) => (
                        <option key={game.name} value={game.name}>
                            {game.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Game iframe */}
            <div className="iframe-container">
                <iframe
                    src={currentGame.url}
                    title={currentGame.name}
                    allowFullScreen
                    allow="autoplay; fullscreen *; gamepad; geolocation; microphone; camera;"
                ></iframe>
            </div>
        </div>
    );
}
