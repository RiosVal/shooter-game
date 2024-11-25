import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GameScene from './GameScene';
import './Game.css';

function Game({ onGameOver }) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onGameOver(score);
    }
  }, [timeLeft, score, onGameOver]);

  const handleBoxDestroy = () => {
    setScore((prev) => prev + 100);
  };

  const timePercentage = (timeLeft / 60) * 100; 

  return (
    <div className="game-container">
      <div className="time-progress-container">
        <div
          className="time-progress-bar"
          style={{ height: `${timePercentage}%` }}
        ></div>
      </div>
      <div className="crosshair"></div>
      <div className="game-hud">
        <div className="score">Score: {score}</div>
        <div className="timer">Time: {timeLeft}s</div>
      </div>
      <Canvas
        style={{ background: '#000000' }}
        camera={{ position: [0, 2, 8], fov: 75 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GameScene onBoxDestroy={handleBoxDestroy} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
}

export default Game;
