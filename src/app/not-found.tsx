'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'

interface GameObject {
  x: number
  y: number
  width: number
  height: number
}

interface Obstacle extends GameObject {
  id: number
}

export default function DinoGame() {
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'gameOver'>('waiting')
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [dinoY, setDinoY] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [obstacles, setObstacles] = useState<Obstacle[]>([])
  const [gameSpeed, setGameSpeed] = useState(6)

  const gameLoopRef = useRef<number | undefined>(undefined)
  const obstacleIdRef = useRef(0)
  const groundY = 200
  const dinoX = 80
  const jumpHeight = 100
  const jumpDuration = 600

  const startGame = useCallback(() => {
    setGameState('playing')
    setScore(0)
    setDinoY(0)
    setIsJumping(false)
    setObstacles([])
    setGameSpeed(6)
    obstacleIdRef.current = 0
  }, [])

  const jump = useCallback(() => {
    if (gameState !== 'playing' || isJumping) return

    setIsJumping(true)
    setDinoY(jumpHeight)

    setTimeout(() => {
      setDinoY(0)
      setTimeout(() => setIsJumping(false), 100)
    }, jumpDuration / 2)
  }, [gameState, isJumping])

  const checkCollision = useCallback((dino: GameObject, obstacle: GameObject) => {
    return (
      dino.x < obstacle.x + obstacle.width &&
      dino.x + dino.width > obstacle.x &&
      dino.y + dino.height > obstacle.y &&
      dino.y < obstacle.y + obstacle.height
    )
  }, [])

  const gameLoop = useCallback(() => {
    if (gameState !== 'playing') return

    setObstacles((prev) => {
      const newObstacles = prev
        .map((obstacle) => ({ ...obstacle, x: obstacle.x - gameSpeed }))
        .filter((obstacle) => obstacle.x > -obstacle.width)

      // Add new obstacles
      if (newObstacles.length === 0 || newObstacles[newObstacles.length - 1].x < 400) {
        if (Math.random() < 0.02) {
          newObstacles.push({
            id: obstacleIdRef.current++,
            x: 800,
            y: groundY - 60,
            width: 20,
            height: 60,
          })
        }
      }

      return newObstacles
    })

    setScore((prev) => prev + 1)

    // Increase speed gradually
    setGameSpeed((prev) => Math.min(prev + 0.005, 12))

    gameLoopRef.current = requestAnimationFrame(gameLoop)
  }, [gameState, gameSpeed])

  // Collision detection
  useEffect(() => {
    if (gameState !== 'playing') return

    const dino = {
      x: dinoX,
      y: groundY - 60 - dinoY,
      width: 40,
      height: 60,
    }

    const collision = obstacles.some((obstacle) => checkCollision(dino, obstacle))

    if (collision) {
      setGameState('gameOver')
      setHighScore((prev) => Math.max(prev, score))
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [obstacles, dinoY, gameState, score, checkCollision])

  // Game loop
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop)
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current)
      }
    }
  }, [gameState, gameLoop])

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault()
        if (gameState === 'waiting' || gameState === 'gameOver') {
          startGame()
        } else {
          jump()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [gameState, startGame, jump])

  const handleClick = () => {
    if (gameState === 'waiting' || gameState === 'gameOver') {
      startGame()
    } else {
      jump()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mb-4 text-center">
        <div className="text-sm text-gray-600 mb-2">
          {gameState === 'waiting' && 'Press SPACE or click to start'}
          {gameState === 'playing' && `Score: ${Math.floor(score / 10)}`}
          {gameState === 'gameOver' && 'Game Over - Press SPACE or click to restart'}
        </div>
        {highScore > 0 && (
          <div className="text-xs text-gray-500">High Score: {Math.floor(highScore / 10)}</div>
        )}
      </div>

      <div
        className="relative w-[800px] h-[300px]  overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-[2px] bg-gray-400"></div>

        {/* Ground pattern */}
        <div className="absolute bottom-2 w-full h-[1px] bg-gray-300"></div>

        {/* Dinosaur */}
        <div
          className={`absolute transition-none ${isJumping ? 'animate-none' : ''}`}
          style={{
            left: `${dinoX}px`,
            bottom: `${20 + dinoY}px`,
            width: '40px',
            height: '60px',
          }}
        >
          <div className="w-full h-full bg-gray-800 relative">
            {/* Dino body */}
            <div className="absolute inset-0 bg-gray-800"></div>
            {/* Dino head */}
            <div className="absolute top-0 left-0 w-6 h-4 bg-gray-800"></div>
            {/* Eye */}
            <div className="absolute top-1 left-1 w-1 h-1  rounded-full"></div>
            {/* Legs animation */}
            {gameState === 'playing' && !isJumping && (
              <div className="absolute bottom-0 left-2 w-2 h-3 bg-gray-800 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Obstacles */}
        {obstacles.map((obstacle) => (
          <div
            key={obstacle.id}
            className="absolute bg-green-600"
            style={{
              left: `${obstacle.x}px`,
              bottom: '20px',
              width: `${obstacle.width}px`,
              height: `${obstacle.height}px`,
            }}
          >
            {/* Cactus design */}
            <div className="w-full h-full bg-green-600 relative">
              <div className="absolute top-2 left-1 w-1 h-4 bg-green-600"></div>
              <div className="absolute top-4 right-1 w-1 h-3 bg-green-600"></div>
            </div>
          </div>
        ))}

        {/* Game Over Screen */}
        {gameState === 'gameOver' && (
          <div className="absolute inset-0  bg-opacity-90 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 mb-4">Game Over</div>
              <div className="text-lg text-gray-600 mb-4">Score: {Math.floor(score / 10)}</div>
              <button onClick={startGame} className=" text-black">
                Restart Game
              </button>
            </div>
          </div>
        )}

        {/* Start Screen */}
        {gameState === 'waiting' && (
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-4">🦕</div>
              <div className="text-xl text-gray-600 mb-4">Chrome Dino Game</div>
              <div className="text-sm text-gray-500 mb-4">Press SPACE or click to jump</div>
              <button onClick={startGame} className="bg-white text-black">
                Start Game
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center max-w-md">
        Use SPACE bar or click to make the dinosaur jump over the cacti. The game gets faster as
        your score increases!
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-sm"
        >
          ← Go Back
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors text-sm text-center"
        >
          🏠 Go Home
        </Link>
      </div>
    </div>
  )
}
