import { useState } from 'react'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Scoreboard from './components/Scoreboard'
import './App.css'

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu')
  const [currentScore, setCurrentScore] = useState(0)

  const handleStartGame = () => {
    setCurrentScore(0)
    setCurrentScreen('game')
  }

  const handleGameOver = (score) => {
    setCurrentScore(score)
    setCurrentScreen('scoreboard')
  }

  const handleBackToMenu = () => {
    setCurrentScreen('menu')
  }

  return (
    <div className="app-container">
      {currentScreen === 'menu' && (
        <MainMenu onStartGame={handleStartGame} onViewScores={() => setCurrentScreen('scoreboard')} />
      )}
      {currentScreen === 'game' && (
        <Game onGameOver={handleGameOver} />
      )}
      {currentScreen === 'scoreboard' && (
        <Scoreboard score={currentScore} onBackToMenu={handleBackToMenu} />
      )}
    </div>
  )
}

export default App