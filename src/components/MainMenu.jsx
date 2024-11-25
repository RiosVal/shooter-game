import React from 'react'
import './MainMenu.css'

function MainMenu({ onStartGame, onViewScores }) {
  return (
    <div className="main-menu">
      <h1>THE SHOTER</h1>
      <div className="menu-buttons">
        <button onClick={onStartGame}>Start Game</button>
        <button onClick={onViewScores}>View Scores</button>
      </div>
    </div>
  )
}

export default MainMenu