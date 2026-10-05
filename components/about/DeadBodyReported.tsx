"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import DeadBodyReportedImage from "@/assets/deadBodyReported.png";

function DeadBodyReported({ open }: { open: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!open) return;

    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/among-us-dead-body-reported-sound-effect_BsczDVE.mp3");
      audioRef.current.preload = "auto";
    }

    const playPromise = audioRef.current.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Ignore browser autoplay restrictions.
      });
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes amongUsReportFlash {
          0% {
            opacity: 0;
            transform: scale(0.96);
            backdrop-filter: blur(0px);
          }
          10% {
            opacity: 1;
            transform: scale(1);
            backdrop-filter: blur(3px);
          }
          18% {
            opacity: 1;
            transform: scale(1.02);
          }
          28% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.04);
            backdrop-filter: blur(0px);
          }
        }

        @keyframes amongUsRedPulse {
          0%, 100% {
            background: rgba(239, 68, 68, 0.12);
            box-shadow: 0 0 0 rgba(239, 68, 68, 0);
          }
          30% {
            background: rgba(239, 68, 68, 0.52);
            box-shadow: 0 0 120px rgba(239, 68, 68, 0.7);
          }
          70% {
            background: rgba(244, 63, 94, 0.28);
            box-shadow: 0 0 80px rgba(248, 113, 113, 0.5);
          }
        }

        @keyframes amongUsTextPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.96);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          60% {
            opacity: 0.9;
          }
        }

        @keyframes amongUsHudSweep {
          0% { transform: translateX(-120%); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }

        .amongus-report-overlay {
          animation: amongUsReportFlash 1.9s ease-out forwards;
        }

        .amongus-red-pulse {
          animation: amongUsRedPulse 1.9s ease-out forwards;
        }

        .amongus-text-pulse {
          animation: amongUsTextPulse 1.2s ease-out forwards;
        }

        .amongus-hud-sweep {
          animation: amongUsHudSweep 1.15s ease-out forwards;
        }
      `}} />

      <div className="fixed inset-0 z-[100] pointer-events-none amongus-report-overlay">
        <div className="absolute inset-0 amongus-red-pulse" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.24),_transparent_52%)]" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[980px]">
          <div className="relative">
            <div className="absolute -inset-x-12 top-1/2 h-1 bg-white/70 blur-sm amongus-hud-sweep" />
            <div className="absolute -inset-x-8 top-1/2 h-0.5 bg-red-300/70 blur-[2px] amongus-hud-sweep" style={{ animationDelay: "0.08s" }} />

            <Image
              src={DeadBodyReportedImage}
              alt="Dead Body Reported"
              className="relative z-10 w-full h-auto drop-shadow-[0_0_35px_rgba(248,113,113,0.75)]"
              priority
            />

            <div className="amongus-text-pulse absolute inset-x-0 top-[14%] flex justify-center">
              <div className="border border-red-200/80 bg-black/35 px-5 py-2 text-center backdrop-blur-sm">
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.55em] text-red-200">Emergency Meeting</p>
                <p className="mt-1 text-xl sm:text-3xl font-black uppercase tracking-[0.45em] text-white">Body Reported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeadBodyReported;
