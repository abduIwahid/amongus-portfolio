"use client";

import React, { useEffect, useState } from "react";
import Computer from "@/components/Skills/ChamberWithComputer";
import AboutWindow from "@/components/about/AboutWindow";
import SkillsTerminal from "@/components/about/SkillsTerminal";
import BodyReport from "@/components/about/BodyReport";
import Ghost from "@/components/about/Ghost";
import WhiteDeadBodyCharacter from "@/components/about/WhiteDeadBodyCharacter";
import DeadBodyReported from "@/components/about/DeadBodyReported";

function Page() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isBodyReportOpen, setIsBodyReportOpen] = useState(false);
  const [isReportOverlayOpen, setIsReportOverlayOpen] = useState(false);

  useEffect(() => {
    if (!isReportOverlayOpen) return;

    const timeoutId = window.setTimeout(() => setIsReportOverlayOpen(false), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [isReportOverlayOpen]);

  return (
    <div className="relative h-screen w-screen overflow-x-auto overflow-y-hidden select-none bg-transparent no-scrollbar flex items-center justify-start">
      {/* 11:6 aspect-ratio room layout that scales to full screen height */}
      <div className="relative h-full aspect-11/6 shrink-0">
        <Computer onClick={() => setIsTerminalOpen(true)} />
        <WhiteDeadBodyCharacter
          onClick={() => {
            setIsBodyReportOpen(true);
            setIsReportOverlayOpen(true);
          }}
        />
        {/* Render Ghost inside the room container so it scrolls together */}
        <Ghost />
      </div>

      <DeadBodyReported open={isReportOverlayOpen} />

      {/* Skills Terminal Window (PC click) */}
      <AboutWindow
        open={isTerminalOpen}
        title="skills.exe — CREWMATE TERMINAL"
        onClose={() => setIsTerminalOpen(false)}
      >
        <SkillsTerminal />
      </AboutWindow>

      {/* Body Report Window (dead body click) */}
      <AboutWindow
        open={isBodyReportOpen}
        title="body_report.pdf — EMERGENCY MEETING"
        onClose={() => {
          setIsBodyReportOpen(false);
          setIsReportOverlayOpen(false);
        }}
      >
        <BodyReport />
      </AboutWindow>
    </div>
  );
}

export default Page;
