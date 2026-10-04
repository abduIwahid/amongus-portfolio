"use client";

import React from "react";
import Image from "next/image";

function BodyReport() {
  return (
    <div className="font-mono text-zinc-800 p-4 sm:p-6 select-text">
      {/* Header */}
      <div className="border-4 border-red-800 bg-red-50 p-3 sm:p-5 mb-6 text-center">
        <p className="text-red-800 font-black text-lg sm:text-2xl tracking-widest uppercase">
          ☠ BODY REPORT ☠
        </p>
        <p className="text-red-600 text-xs sm:text-sm mt-1 font-bold">
          CLASSIFIED — EMERGENCY MEETING FILE
        </p>
      </div>

      {/* Top: photo + identity */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="border-4 border-cyan-500 bg-black p-1 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]">
            <Image
              src="/pfp.png"
              alt="Abdul Wahid"
              width={90}
              height={90}
              className="rounded-full object-cover object-top mix-blend-multiply"
            />
          </div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">SPECIMEN</p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:text-base flex-1">
          <ReportRow label="FULL NAME" value="Abdul Wahid" />
          <ReportRow label="STATUS" value="🔴 DEVELOPER (Suspected Impostor)" />
          <ReportRow label="CGPA" value="3.46 / 4.00" />
          <ReportRow label="AFFILIATION" value="COMSATS University Islamabad" />
          <ReportRow label="PROGRAM" value="BS Artificial Intelligence (5th Sem)" />
          <ReportRow label="CONTACT" value="+92 307-8141252" />
          <ReportRow label="EMAIL" value="abdulwahid.connects@gmail.com" />
        </div>
      </div>

      <Divider />

      {/* Cause of death */}
      <Section title="⚠ CAUSE OF INCIDENT">
        <p className="text-red-700 font-bold text-sm sm:text-base">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
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
      <div className="border-4 border-zinc-800 bg-zinc-800 text-green-400 font-black text-center p-3 sm:p-4 mt-2 tracking-widest text-sm sm:text-base uppercase">
        VERDICT: NOT THE IMPOSTOR — JUST A CREWMATE WHO CODES 🚀
      </div>
    </div>
  );
}

function ReportRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-2 border-b border-dashed border-zinc-300 pb-1">
      <span className="font-bold text-zinc-500 uppercase text-xs sm:text-sm w-full sm:w-40 shrink-0">
        {label}:
      </span>
      <span className="text-zinc-800 text-xs sm:text-sm">{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="font-black text-xs sm:text-sm uppercase tracking-widest text-zinc-600 mb-2">{title}</p>
      {children}
    </div>
  );
}

function Divider() {
  return <hr className="border-2 border-dashed border-zinc-400 my-4" />;
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
    <div className="mb-3 border-l-4 border-red-600 pl-3">
      <p className="font-bold text-sm sm:text-base">{role}</p>
      <p className="text-xs sm:text-sm text-zinc-500">
        {org} · <span className="italic">{period}</span>
      </p>
      <ul className="list-disc list-inside text-xs sm:text-sm mt-1 text-zinc-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function WeaponTag({ label }: { label: string }) {
  return (
    <div className="border-2 border-red-700 bg-red-50 text-red-800 font-bold px-2 py-1 text-center rounded">
      {label}
    </div>
  );
}

export default BodyReport;
