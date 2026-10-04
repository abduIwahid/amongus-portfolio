"use client";

import React, { useEffect, useState } from "react";

const TERMINAL_LINES = [
  { label: "> CONNECTING TO CREWMATE DATABASE...", delay: 0, color: "text-green-400" },
  { label: "> IDENTITY: Abdul Wahid | AI/ML Developer", delay: 600, color: "text-white" },
  { label: "> CGPA: 3.46/4.00 | COMSATS University Islamabad", delay: 1200, color: "text-white" },
  { label: "─────────────────────────────────────────", delay: 1700, color: "text-green-700" },
  { label: "> LOADING SKILLS...", delay: 1800, color: "text-yellow-400" },
  { label: "  [PYTHON]        ████████░░  85%", delay: 2200, color: "text-cyan-300" },
  { label: "  [JAVA]          ████████░░  80%", delay: 2500, color: "text-cyan-300" },
  { label: "  [JAVASCRIPT]    ███████░░░  75%", delay: 2800, color: "text-cyan-300" },
  { label: "  [C++]           ███████░░░  70%", delay: 3100, color: "text-cyan-300" },
  { label: "─────────────────────────────────────────", delay: 3400, color: "text-green-700" },
  { label: "> LOADING AI/ML MODULES...", delay: 3500, color: "text-yellow-400" },
  { label: "  [SCIKIT-LEARN]  ██████████  LOADED", delay: 3800, color: "text-purple-300" },
  { label: "  [NUMPY/PANDAS]  ██████████  LOADED", delay: 4100, color: "text-purple-300" },
  { label: "  [XGBOOST/SHAP]  ██████████  LOADED", delay: 4400, color: "text-purple-300" },
  { label: "  [NEURAL NETS]   ███████░░░  65%", delay: 4700, color: "text-purple-300" },
  { label: "─────────────────────────────────────────", delay: 5000, color: "text-green-700" },
  { label: "> LOADING TOOLS...", delay: 5100, color: "text-yellow-400" },
  { label: "  [GIT/GITHUB]    ██████████  LOADED", delay: 5400, color: "text-orange-300" },
  { label: "  [NEXT.JS]       ██████████  LOADED", delay: 5700, color: "text-orange-300" },
  { label: "  [FASTAPI/FLASK] ██████████  LOADED", delay: 6000, color: "text-orange-300" },
  { label: "  [MYSQL]         ███████░░░  70%", delay: 6300, color: "text-orange-300" },
  { label: "─────────────────────────────────────────", delay: 6600, color: "text-green-700" },
  { label: "> DSA PROFICIENCY: 82% | OOP: MASTERED", delay: 6800, color: "text-white" },
  { label: "> ALL SYSTEMS NOMINAL. CREWMATE VERIFIED ✓", delay: 7400, color: "text-green-400" },
  { label: "> _", delay: 7800, color: "text-green-400 animate-pulse" },
];

function SkillsTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    TERMINAL_LINES.forEach((_, idx) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, idx + 1));
      }, TERMINAL_LINES[idx].delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="bg-black rounded-none w-full h-full min-h-[300px] p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-auto">
      <div className="mb-4 text-green-500 text-base sm:text-lg font-bold tracking-widest">
        ╔══════════════════════════════════════╗
        <br />
        ║&nbsp;&nbsp;&nbsp;&nbsp;CREWMATE SKILLS TERMINAL v1.0&nbsp;&nbsp;&nbsp;&nbsp;║
        <br />
        ╚══════════════════════════════════════╝
      </div>
      {TERMINAL_LINES.slice(0, visibleLines).map((line, idx) => (
        <div
          key={idx}
          className={`${line.color} leading-relaxed whitespace-pre`}
        >
          {line.label}
        </div>
      ))}
    </div>
  );
}

export default SkillsTerminal;
