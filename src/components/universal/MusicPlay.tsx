// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

// interface AudioContextRefs {
//   audioContext: AudioContext | null;
//   analyser: AnalyserNode | null;
//   dataArray: Uint8Array | null;
//   source: MediaElementAudioSourceNode | null;
// }

// export function MusicPlay() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(0.7);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const audioRef = useRef<HTMLAudioElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const audioContextRefs = useRef<AudioContextRefs>({
//     audioContext: null,
//     analyser: null,
//     dataArray: null,
//     source: null,
//   });

//   // Initialize audio context and analyser
//   const initAudioContext = useCallback(() => {
//     if (!audioContextRefs.current.audioContext && audioRef.current) {
//       try {
//         const AudioContext =
//           window.AudioContext || (window as any).webkitAudioContext;
//         const audioContext = new AudioContext();
//         const analyser = audioContext.createAnalyser();
//         analyser.fftSize = 256;

//         const bufferLength = analyser.frequencyBinCount;
//         const dataArray = new Uint8Array(bufferLength);

//         const source = audioContext.createMediaElementSource(audioRef.current);
//         source.connect(analyser);
//         analyser.connect(audioContext.destination);

//         audioContextRefs.current = {
//           audioContext,
//           analyser,
//           dataArray,
//           source,
//         };
//       } catch (err) {
//         console.error("Failed to initialize audio context:", err);
//         setError("Failed to initialize audio context");
//       }
//     }
//   }, []);

//   // Draw frequency visualization
//   const drawVisualization = useCallback(() => {
//     const canvas = canvasRef.current;
//     const { analyser, dataArray } = audioContextRefs.current;

//     if (!canvas || !analyser || !dataArray) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const width = canvas.width;
//     const height = canvas.height;

//     analyser.getByteFrequencyData(dataArray);

//     // Clear canvas with background color
//     ctx.fillStyle = "#D4E09B";
//     ctx.fillRect(0, 0, width, height);

//     const barCount = 60;
//     const barWidth = width / barCount;
//     const step = Math.floor(dataArray.length / barCount);

//     // Draw frequency bars
//     ctx.strokeStyle = "#4B5563";
//     ctx.lineWidth = 2;
//     ctx.lineCap = "round";

//     for (let i = 0; i < barCount; i++) {
//       const dataIndex = i * step;
//       const value = dataArray[dataIndex] || 0;
//       const barHeight = (value / 255) * height * 0.7;

//       ctx.beginPath();
//       ctx.moveTo(i * barWidth + barWidth / 2, height / 2 - barHeight / 2);
//       ctx.lineTo(i * barWidth + barWidth / 2, height / 2 + barHeight / 2);
//       ctx.stroke();
//     }

//     if (isPlaying) {
//       animationRef.current = requestAnimationFrame(drawVisualization);
//     }
//   }, [isPlaying]);

//   // Handle play/pause
//   const togglePlay = async () => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     setError(null);
//     setIsLoading(true);

//     try {
//       if (isPlaying) {
//         audio.pause();
//         setIsPlaying(false);
//         if (animationRef.current) {
//           cancelAnimationFrame(animationRef.current);
//           animationRef.current = null;
//         }
//       } else {
//         // Initialize audio context on first play (user gesture required)
//         if (!audioContextRefs.current.audioContext) {
//           initAudioContext();
//         }

//         // Resume audio context if suspended
//         if (audioContextRefs.current.audioContext?.state === "suspended") {
//           await audioContextRefs.current.audioContext.resume();
//         }

//         await audio.play();
//         setIsPlaying(true);
//         drawVisualization();
//       }
//     } catch (err) {
//       console.error("Error playing audio:", err);
//       setError("Failed to play audio. Please check your connection.");
//       setIsPlaying(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Update time
//   const handleTimeUpdate = () => {
//     if (audioRef.current) {
//       setCurrentTime(audioRef.current.currentTime);
//     }
//   };

//   // Set duration when metadata loads
//   const handleLoadedMetadata = () => {
//     if (audioRef.current) {
//       setDuration(audioRef.current.duration);
//       setError(null);
//     }
//   };

//   // Handle loading events
//   const handleLoadStart = () => {
//     setIsLoading(true);
//   };

//   const handleCanPlay = () => {
//     setIsLoading(false);
//     setError(null);
//   };

//   const handleError = () => {
//     setError("Failed to load audio track");
//     setIsLoading(false);
//     setIsPlaying(false);
//   };

//   // Handle volume change
//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = parseFloat(e.target.value);
//     setVolume(newVolume);
//     if (audioRef.current) {
//       audioRef.current.volume = newVolume;
//     }
//   };

//   // Format time
//   const formatTime = (time: number): string => {
//     if (!time || isNaN(time)) return "0:00";
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds.toString().padStart(2, "0")}`;
//   };

//   // Handle seek
//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newTime = parseFloat(e.target.value);
//     setCurrentTime(newTime);
//     if (audioRef.current) {
//       audioRef.current.currentTime = newTime;
//     }
//   };

//   // Skip functions
//   const skipBackward = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = Math.max(
//         0,
//         audioRef.current.currentTime - 10,
//       );
//     }
//   };

//   const skipForward = () => {
//     if (audioRef.current && duration) {
//       audioRef.current.currentTime = Math.min(
//         duration,
//         audioRef.current.currentTime + 10,
//       );
//     }
//   };

//   // Update canvas size on resize
//   useEffect(() => {
//     const updateCanvasSize = () => {
//       const canvas = canvasRef.current;
//       if (canvas) {
//         const rect = canvas.getBoundingClientRect();
//         canvas.width = rect.width * window.devicePixelRatio;
//         canvas.height = rect.height * window.devicePixelRatio;

//         const ctx = canvas.getContext("2d");
//         if (ctx) {
//           ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//         }
//       }
//     };

//     updateCanvasSize();
//     window.addEventListener("resize", updateCanvasSize);

//     return () => {
//       window.removeEventListener("resize", updateCanvasSize);
//     };
//   }, []);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//       if (audioContextRefs.current.audioContext) {
//         audioContextRefs.current.audioContext.close();
//       }
//     };
//   }, []);

//   // Set initial volume
//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.volume = volume;
//     }
//   }, [volume]);

//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-50 bg-accent border-t border-[#6B7280] shadow-lg h-16 items-center justify-center">
//       <div className="w-full items-center justify-center h-full">
//         <div className="mx-auto w-full max-w-6xl px-4 items-center justify-center h-full">
//           {/* Controls */}
//           <div className="flex items-center justify-between bg-blue-400 h-full">
//             {/* Playback controls */}
//             <div className="flex items-center gap-3 bg-red-300">
//               <button
//                 onClick={skipBackward}
//                 disabled={!duration || isLoading}
//                 className="p-2 hover:bg-[#c5d189] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 aria-label="Skip back 10 seconds"
//               >
//                 <SkipBack size={20} />
//               </button>

//               <button
//                 onClick={togglePlay}
//                 disabled={isLoading}
//                 className="p-3 bg-[#6B7280] hover:bg-[#4B5563] text-white rounded-full transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
//                 aria-label={isPlaying ? "Pause" : "Play"}
//               >
//                 {isLoading ? (
//                   <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 ) : isPlaying ? (
//                   <Pause size={24} fill="white" />
//                 ) : (
//                   <Play size={24} fill="white" className="ml-1" />
//                 )}
//               </button>

//               <button
//                 onClick={skipForward}
//                 disabled={!duration || isLoading}
//                 className="p-2 hover:bg-[#c5d189] rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 aria-label="Skip forward 10 seconds"
//               >
//                 <SkipForward size={20} />
//               </button>
//             </div>

//             {/* Time and progress */}
//             <div className="flex items-center gap-3 flex-1 min-w-0">
//               <span className="text-sm font-mono whitespace-nowrap text-[#4B5563]">
//                 {formatTime(currentTime)}
//               </span>
//               <input
//                 type="range"
//                 min="0"
//                 max={duration || 0}
//                 value={currentTime}
//                 onChange={handleSeek}
//                 disabled={!duration}
//                 className="flex-1 h-2 bg-[#6B7280] rounded-lg appearance-none cursor-pointer accent-[#4B5563] disabled:opacity-50 disabled:cursor-not-allowed"
//                 aria-label="Seek"
//               />
//               <span className="text-sm font-mono whitespace-nowrap text-[#4B5563]">
//                 {formatTime(duration)}
//               </span>
//             </div>

//             {/* Volume control */}
//             <div className="flex items-center gap-2">
//               <Volume2 size={20} className="text-[#4B5563]" />
//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="0.01"
//                 value={volume}
//                 onChange={handleVolumeChange}
//                 className="w-24 h-2 bg-[#6B7280] rounded-lg appearance-none cursor-pointer accent-[#4B5563]"
//                 aria-label="Volume"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Audio element */}
//       <audio
//         ref={audioRef}
//         onTimeUpdate={handleTimeUpdate}
//         onLoadedMetadata={handleLoadedMetadata}
//         onLoadStart={handleLoadStart}
//         onCanPlay={handleCanPlay}
//         onError={handleError}
//         onEnded={() => setIsPlaying(false)}
//         crossOrigin="anonymous"
//         preload="metadata"
//       >
//         <source src="/calming-rain.mp3" type="audio/mpeg" />
//         <source
//           src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//           type="audio/mpeg"
//         />
//         Your browser does not support the audio element.
//       </audio>
//     </div>
//   );
// }
