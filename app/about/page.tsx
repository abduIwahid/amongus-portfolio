"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Computer from "@/components/Skills/ChamberWithComputer";
import AboutWindow from "@/components/about/AboutWindow";
import SkillsTerminal from "@/components/about/SkillsTerminal";
import BodyReport from "@/components/about/BodyReport";
import Ghost from "@/components/about/Ghost";
import WhiteDeadBodyCharacter from "@/components/about/WhiteDeadBodyCharacter";

function Page() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isBodyReportOpen, setIsBodyReportOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-x-auto overflow-y-hidden select-none bg-transparent no-scrollbar flex items-center justify-start">
      {/* 11:6 aspect-ratio room layout that scales to full screen height */}
      <div className="relative h-full aspect-[11/6] flex-shrink-0">
        <Computer onClick={() => setIsTerminalOpen(true)} />
        <WhiteDeadBodyCharacter onClick={() => setIsBodyReportOpen(true)} />
        {/* Render Ghost inside the room container so it scrolls together */}
        <Ghost />
      </div>

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
        onClose={() => setIsBodyReportOpen(false)}
      >
        <BodyReport />
      </AboutWindow>
    </div>
  );
}

export default Page;
