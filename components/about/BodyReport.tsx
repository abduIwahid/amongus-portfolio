"use client";

import React from "react";
import Image from "next/image";

function BodyReport() {
  return (
    <div className="font-mono text-zinc-800 p-4 sm:p-6 select-text">
      {/* Header */}
      <div className="mb-6 border-4 border-red-800 bg-[radial-gradient(circle_at_top,rgba(254,202,202,0.9),rgba(127,29,29,0.9)_45%,rgba(69,10,10,1)_100%)] p-3 text-center shadow-[0_0_30px_rgba(239,68,68,0.4)] sm:p-5">
        <p className="text-lg font-black tracking-[0.4em] text-red-50 uppercase sm:text-2xl">
          ☠ BODY REPORT ☠
        </p>
        <p className="mt-1 text-xs font-bold tracking-[0.25em] text-red-200 sm:text-sm">
          CLASSIFIED — EMERGENCY MEETING FILE
        </p>
      </div>

      {/* Top: photo + identity */}
      <div className="mb-6 flex flex-col gap-6 sm:flex-row">
        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="rounded-full border-4 border-cyan-400 bg-[#020617] p-1.5 shadow-[0_0_25px_rgba(34,211,238,0.5)] ring-2 ring-[#f8fafc]/30">
            <Image
              src="/pfp.png"
              alt="Abdul Wahid"
              width={90}
              height={90}
              className="rounded-full border-2 border-white/20 object-cover object-top shadow-[0_0_18px_rgba(59,130,246,0.5)]"
            />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.45em] text-zinc-500">SPECIMEN</p>
        </div>

        <div className="flex flex-1 flex-col gap-2 text-sm sm:text-base">
          <ReportRow label="FULL NAME" value="Abdul Wahid" />
          <ReportRow label="STATUS" value="🔴 DEVELOPER (Suspected Impostor)" />
          <ReportRow label="CGPA" value="3.46 / 4.00" />
          <ReportRow label="AFFILIATION" value="COMSATS University Islamabad, Attock Campus" />
          <ReportRow label="PROGRAM" value="BS Artificial Intelligence" />
          <ReportRow label="CONTACT" value="+92 307-8141252" />
          <ReportRow label="EMAIL" value="abdulwahid.connects@gmail.com" />
        </div>
      </div>

      <Divider />

      {/* Cause of death */}
      <Section title="⚠ CAUSE OF INCIDENT">
        <p className="text-sm font-bold text-red-700 sm:text-base">
          Too many side projects. Victim was last seen building an AI-themed portfolio at 2AM.
        </p>
      </Section>

      <Divider />

      {/* Exhibit A: Experience */}
      <Section title="📁 EXHIBIT A — WORK EXPERIENCE">
        <ExhibitItem
          role="AI/ML Developer Intern"
          org="Protech Minds"
          period="Aug 2025 – Oct 2025"
          bullets={[
            "Developed Employee Attrition Predictor with XGBoost (ROC-AUC: 0.87)",
            "Built SHAP explainability dashboard for HR analytics",
          ]}
        />
        <ExhibitItem
          role="Web Developer"
          org="Global STEM Foundation"
          period="Sep 2025 – Oct 2025"
          bullets={[
            "Architected the FA24-BAI Study Hub platform with Next.js",
            "Integrated Supabase for real-time data and auth",
          ]}
        />
      </Section>

      <Divider />

      {/* Exhibit B: Weapons (Skills) */}
      <Section title="🔫 EXHIBIT B — WEAPONS FOUND ON SCENE">
        <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:text-sm">
          <WeaponTag label="Python (85%)" />
          <WeaponTag label="Machine Learning" />
          <WeaponTag label="Next.js / React" />
          <WeaponTag label="FastAPI / Flask" />
          <WeaponTag label="scikit-learn / XGBoost" />
          <WeaponTag label="MySQL / Supabase" />
          <WeaponTag label="Git / GitHub" />
          <WeaponTag label="Neural Networks" />
        </div>
      </Section>

      <Divider />

      {/* Verdict */}
      <div className="mt-2 border-4 border-zinc-800 bg-[#0f172a] p-3 text-center text-sm font-black uppercase tracking-[0.3em] text-emerald-400 sm:p-4 sm:text-base">
        VERDICT: NOT THE IMPOSTOR — JUST A CREWMATE WHO CODES 🚀
      </div>
    </div>
  );
}

function ReportRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col border-b border-dashed border-zinc-300 pb-1 sm:flex-row sm:gap-2">
      <span className="w-full shrink-0 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500 sm:w-40 sm:text-sm">
        {label}:
      </span>
      <span className="text-xs text-zinc-800 sm:text-sm">{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 sm:text-sm">{title}</p>
      {children}
    </div>
  );
}

function Divider() {
  return <hr className="my-4 border-2 border-dashed border-zinc-400" />;
}

function ExhibitItem({
  role,
  org,
  period,
  bullets,
}: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="mb-3 border-l-4 border-red-600 bg-red-50/60 pl-3">
      <p className="text-sm font-bold sm:text-base">{role}</p>
      <p className="text-xs text-zinc-500 sm:text-sm">
        {org} · <span className="italic">{period}</span>
      </p>
      <ul className="mt-1 list-inside list-disc text-xs text-zinc-700 sm:text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function WeaponTag({ label }: { label: string }) {
  return (
    <div className="rounded border-2 border-red-700 bg-red-50 px-2 py-1 text-center font-bold text-red-800">
      {label}
    </div>
  );
}

export default BodyReport;
