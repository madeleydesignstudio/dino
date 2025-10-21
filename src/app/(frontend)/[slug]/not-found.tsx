"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";

interface GameState {
  isPlaying: boolean;
  isGameOver: boolean;
  score: number;
  highScore: number;
}

interface DinoState {
  y: number;
  velocity: number;
  isJumping: boolean;
}

interface Obstacle {
  x: number;
  width: number;
  height: number;
}

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>(0);
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    isGameOver: false,
    score: 0,
    highScore: 0,
  });

  // Game constants
  const CANVAS_WIDTH = 800;
  const CANVAS_HEIGHT = 200;
  const GROUND_Y = CANVAS_HEIGHT - 20;
  const DINO_WIDTH = 20;
  const DINO_HEIGHT = 25;
  const DINO_X = 50;
  const GRAVITY = 0.6;
  const JUMP_FORCE = -12;
  const GAME_SPEED = 3;
  const OBSTACLE_WIDTH = 15;
  const OBSTACLE_HEIGHT = 25;

  const dinoRef = useRef<DinoState>({
    y: GROUND_Y - DINO_HEIGHT,
    velocity: 0,
    isJumping: false,
  });

  const obstaclesRef = useRef<Obstacle[]>([]);
  const scoreRef = useRef(0);
  const frameCountRef = useRef(0);

  const jump = useCallback(() => {
    if (!dinoRef.current.isJumping) {
      dinoRef.current.velocity = JUMP_FORCE;
      dinoRef.current.isJumping = true;
    }
  }, []);

  const resetGame = useCallback(() => {
    dinoRef.current = {
      y: GROUND_Y - DINO_HEIGHT,
      velocity: 0,
      isJumping: false,
    };
    obstaclesRef.current = [];
    scoreRef.current = 0;
    frameCountRef.current = 0;
    setGameState((prev) => ({
      ...prev,
      isGameOver: false,
      score: 0,
    }));
  }, []);

  const startGame = useCallback(() => {
    resetGame();
    setGameState((prev) => ({ ...prev, isPlaying: true }));
  }, [resetGame]);

  const gameLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#bac0a4"; // Your background color
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw ground line
    ctx.strokeStyle = "#404040";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
    ctx.stroke();

    // Update dino physics
    const dino = dinoRef.current;
    dino.velocity += GRAVITY;
    dino.y += dino.velocity;

    if (dino.y >= GROUND_Y - DINO_HEIGHT) {
      dino.y = GROUND_Y - DINO_HEIGHT;
      dino.velocity = 0;
      dino.isJumping = false;
    }

    // Draw dino
    ctx.fillStyle = "#404040";
    ctx.fillRect(DINO_X, dino.y, DINO_WIDTH, DINO_HEIGHT);

    // Add simple dino details
    ctx.fillStyle = "#c64b4b"; // Your accent color
    ctx.fillRect(DINO_X + 2, dino.y + 2, 4, 4); // Eye
    ctx.fillRect(DINO_X + 15, dino.y + 20, 8, 3); // Tail

    // Update obstacles
    frameCountRef.current++;
    if (frameCountRef.current % 120 === 0) {
      // Spawn obstacle every 2 seconds at 60fps
      obstaclesRef.current.push({
        x: CANVAS_WIDTH,
        width: OBSTACLE_WIDTH,
        height: OBSTACLE_HEIGHT,
      });
    }

    // Update and draw obstacles
    for (let i = obstaclesRef.current.length - 1; i >= 0; i--) {
      const obstacle = obstaclesRef.current[i];
      obstacle.x -= GAME_SPEED;

      // Remove off-screen obstacles
      if (obstacle.x + obstacle.width < 0) {
        obstaclesRef.current.splice(i, 1);
        scoreRef.current += 10;
        continue;
      }

      // Draw obstacle (cactus-like)
      ctx.fillStyle = "#404040";
      ctx.fillRect(
        obstacle.x,
        GROUND_Y - obstacle.height,
        obstacle.width,
        obstacle.height,
      );

      // Add cactus details
      ctx.fillStyle = "#c64b4b";
      ctx.fillRect(obstacle.x + 2, GROUND_Y - obstacle.height + 5, 3, 8);
      ctx.fillRect(
        obstacle.x + obstacle.width - 5,
        GROUND_Y - obstacle.height + 8,
        3,
        8,
      );

      // Collision detection
      if (
        DINO_X < obstacle.x + obstacle.width &&
        DINO_X + DINO_WIDTH > obstacle.x &&
        dino.y < GROUND_Y - obstacle.height + obstacle.height &&
        dino.y + DINO_HEIGHT > GROUND_Y - obstacle.height
      ) {
        // Game over
        setGameState((prev) => ({
          ...prev,
          isPlaying: false,
          isGameOver: true,
          score: scoreRef.current,
          highScore: Math.max(prev.highScore, scoreRef.current),
        }));
        return;
      }
    }

    // Draw score
    ctx.fillStyle = "#404040";
    ctx.font = "16px monospace";
    ctx.fillText(`Score: ${scoreRef.current}`, CANVAS_WIDTH - 120, 30);

    // Continue game loop
    if (gameState.isPlaying) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  }, [gameState.isPlaying]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (gameState.isPlaying) {
          jump();
        } else if (gameState.isGameOver) {
          startGame();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameState.isPlaying, gameState.isGameOver, jump, startGame]);

  // Start game loop
  useEffect(() => {
    if (gameState.isPlaying) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState.isPlaying, gameLoop]);

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem("dino-highscore");
    if (savedHighScore) {
      setGameState((prev) => ({
        ...prev,
        highScore: parseInt(savedHighScore, 10),
      }));
    }
  }, []);

  // Save high score
  useEffect(() => {
    if (gameState.highScore > 0) {
      localStorage.setItem("dino-highscore", gameState.highScore.toString());
    }
  }, [gameState.highScore]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Page Not Found
        </h2>

        {/* Game Canvas */}
        <div className="mb-8 border-2 border-foreground rounded-lg overflow-hidden bg-background shadow-lg">
          <canvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
            className="block"
            onClick={gameState.isGameOver ? startGame : jump}
          />
        </div>

        {/* Game UI */}
        <div className="mb-6">
          {!gameState.isPlaying && !gameState.isGameOver && (
            <div>
              <p className="text-foreground mb-4">
                Since you're here, why not play our dino game?
              </p>
              <button
                onClick={startGame}
                className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-80 transition-opacity font-bold mb-4"
              >
                Start Game
              </button>
              <p className="text-sm text-foreground">
                Press SPACE or ↑ to jump
              </p>
            </div>
          )}

          {gameState.isGameOver && (
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Game Over!
              </h3>
              <p className="text-foreground mb-2">Score: {gameState.score}</p>
              <p className="text-foreground mb-4">
                High Score: {gameState.highScore}
              </p>
              <button
                onClick={startGame}
                className="bg-accent text-white px-6 py-3 rounded-lg hover:opacity-80 transition-opacity font-bold mb-4"
              >
                Play Again
              </button>
              <p className="text-sm text-foreground">Press SPACE to restart</p>
            </div>
          )}
        </div>

        <p className="text-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-block bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-80 transition-opacity font-bold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
