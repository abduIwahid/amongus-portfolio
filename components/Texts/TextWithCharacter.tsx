"use client";

import { useState, useEffect } from "react";
import TypedText from "./TypedText";
import Image from "next/image";
import RedCharacter from "@/assets/red-among-us.svg";
import { cn } from "@/lib/utils";
import { playTypingSound, getIsMuted } from "@/hooks/useClickSound";

interface TextWithCharacterProps {
  texts?: string[];
  className?: string;
  onComplete?: () => void;
}

function TextWithCharacter({
  texts = [
    "Welcome to AbdulWahid's Portfolio!",
    ":)",
  ],
  className = "",
  onComplete,
}: TextWithCharacterProps) {
  const [phase, setPhase] = useState<"start" | "impostor" | "welcome">("start");
  const [startTyping, setStartTyping] = useState(false);
  const [imposterScale, setImposterScale] = useState(false);

  useEffect(() => {
    // Phase 1: Impostor Animation
    if (phase === "impostor") {
      // Trigger the scale animation slightly after mount
      setTimeout(() => setImposterScale(true), 100);

      // Play sound
      if (!getIsMuted()) {
        const audio = new Audio("/sounds/imposter-sound.mp3");
        audio.volume = 0.6;
        audio.play().catch((e) => console.log("Audio play failed:", e));
      }

      // Switch to welcome phase after 3.5 seconds
      const timer = setTimeout(() => {
        setPhase("welcome");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    // Phase 2: Typing sound
    if (phase === "welcome" && startTyping) {
      playTypingSound();
      if (onComplete) {
        setTimeout(onComplete, 2800); // Wait for typing to finish before unmounting
      }
    }
  }, [phase, startTyping, onComplete]);

  if (phase === "start") {
    return (
      <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black">
        <button 
          onClick={() => setPhase("impostor")}
          className="among-font text-3xl sm:text-5xl text-white hover:text-red-500 transition-colors animate-pulse tracking-widest"
        >
          CLICK TO START
        </button>
      </div>
    );
  }

  if (phase === "impostor") {
    return (
      <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black">
        <div className="relative flex flex-col justify-center items-center">
           <h1 
             className={cn(
               "text-6xl sm:text-8xl lg:text-[10rem] among-font text-red-600 tracking-widest drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] z-10 select-none transition-transform duration-700 ease-out",
               imposterScale ? "scale-100" : "scale-0"
             )}
           >
             IMPOSTOR
           </h1>
           <p 
             className={cn(
               "mt-6 text-red-500 text-lg sm:text-2xl font-mono tracking-wider transition-opacity duration-1000 delay-500",
               imposterScale ? "opacity-100" : "opacity-0"
             )}
           >
             There is 1 Impostor among us
           </p>
        </div>
      </div>
    );
  }

  // Phase "welcome"
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 sm:gap-4 w-full",
        className,
      )}
    >
      <div className="w-[240px] sm:w-[400px] flex justify-end">
        {startTyping && (
          <TypedText
            texts={texts}
            className="text-sm sm:text-lg font-sans text-gray-100 text-right"
          />
        )}
      </div>

      <div
        className="character-enter shrink-0"
        onAnimationEnd={() => setStartTyping(true)}
      >
        <div className="character-bob">
          <Image
            src={RedCharacter}
            className="w-18 h-18 transform rotate-12 sm:rotate-15"
            alt="Red Among Us character"
          />
        </div>
      </div>
    </div>
  );
}

export default TextWithCharacter;
