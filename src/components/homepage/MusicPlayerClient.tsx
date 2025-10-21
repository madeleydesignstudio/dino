"use client";

import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState, useRef, useEffect, ReactNode } from "react";

interface MusicPlayerClientProps {
  albumArt: ReactNode;
}

export const MusicPlayerClient = ({ albumArt }: MusicPlayerClientProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  // Rain sound URL - you can replace this with your own rain sound file
  const rainSoundUrl = "/calming-rain.mp3"; // Replace with your rain sound file path

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipBackward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(duration, audio.currentTime + 10);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value) / 100;
    setVolume(newVolume);
    if (audio) audio.volume = newVolume;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-background border border-foreground rounded-lg p-4 max-w-md mx-auto">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={rainSoundUrl}
        loop // Rain sounds should loop
        preload="metadata"
      />

      {/* Main player display */}
      <div className="flex items-center gap-4 mb-4">
        {albumArt}
        <div className="flex-1">
          <p className="font-semibold text-foreground">Rain Sounds</p>
          <p className="text-sm text-foreground/70">Relaxing Nature Sounds</p>
        </div>
        <div className="flex items-center gap-1">
          <Volume2 size={16} className="text-foreground" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-foreground/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #404040 0%, #404040 ${volume * 100}%, #40404033 ${volume * 100}%, #40404033 100%)`,
            }}
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-foreground/70 mb-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={progressPercentage}
          onChange={handleProgressChange}
          className="w-full h-2 bg-foreground/20 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #c64b4b 0%, #c64b4b ${progressPercentage}%, #40404033 ${progressPercentage}%, #40404033 100%)`,
          }}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={skipBackward}
          className="text-foreground hover:text-accent transition-colors"
          title="Skip back 10s"
        >
          <SkipBack size={24} />
        </button>

        <button
          onClick={togglePlay}
          className="text-foreground hover:text-accent transition-colors bg-foreground/10 rounded-full p-2"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <button
          onClick={skipForward}
          className="text-foreground hover:text-accent transition-colors"
          title="Skip forward 10s"
        >
          <SkipForward size={24} />
        </button>
      </div>
    </div>
  );
};
