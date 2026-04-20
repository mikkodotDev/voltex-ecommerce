import React, { useEffect, useRef, useState } from "react";
import { MdVolumeUp, MdVolumeMute } from "react-icons/md";

const GlobalAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(() => {
    // Load muted preference from localStorage
    const saved = localStorage.getItem("voltex-audio-muted");
    return saved ? JSON.parse(saved) : false;
  });
  const [hasStarted, setHasStarted] = useState(false);
  const startAttemptedRef = useRef(false);

  // Initialize audio muted state and volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = 0.1; // Set volume to 10%
    }
  }, [isMuted]);

  // Start playing on first user interaction
  useEffect(() => {
    const startMusic = async () => {
      if (startAttemptedRef.current || hasStarted) return;
      startAttemptedRef.current = true;

      try {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          setHasStarted(true);
          // Fade in effect
          audioRef.current.style.opacity = "0";
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.style.transition = "opacity 0.8s ease-in";
              audioRef.current.style.opacity = "1";
            }
          }, 50);
        }
      } catch (error) {
        console.log("Autoplay prevented or failed:", error);
        startAttemptedRef.current = false;
      }
    };

    const events = ["click", "scroll", "keydown", "touchstart"];
    events.forEach((event) => {
      document.addEventListener(event, startMusic, { once: true });
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, startMusic);
      });
    };
  }, [hasStarted]);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    localStorage.setItem("voltex-audio-muted", JSON.stringify(newMutedState));

    if (audioRef.current) {
      audioRef.current.muted = newMutedState;
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/music.mp3`}
        loop
        muted={isMuted}
        style={{ display: "none" }}
      />

      {/* Mute toggle button */}
      <button
        onClick={toggleMute}
        className="global-audio-toggle"
        aria-label={isMuted ? "Unmute" : "Mute"}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <MdVolumeMute size={20} /> : <MdVolumeUp size={20} />}
      </button>
    </>
  );
};

export default GlobalAudio;
