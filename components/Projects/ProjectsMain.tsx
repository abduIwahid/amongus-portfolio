import React from "react";
import Vent from "../Vent";
import SecurityRoom from "./SecurityRoom";
import Project from "./Project";
import {Triangle} from "lucide-react"
import {
  AnchorImage1,
    AnchorImage2,
    AnchorImage3,

    AddaxImage1,
    AddaxImage2,
    AddaxImage3,

    KnowmoImage1,
    KnowmoImage2,
    // KnowmoImage3,

    WalletImage1,
    WalletImage2
} from "../../assets/projects/ProjectImages"
import MappedProjects from "./MappedProjects";

const projectsArray = [
  {
    name: "MediSight AI",
    content:
      "An enterprise AI healthcare platform designed for early multi-disease risk prediction (Diabetes, Heart Disease, CKD, Stroke, Liver Disease, Breast Cancer & Hypertension) featuring SHAP Explainable AI and Clinical Decision Support.",
    link: "https://medisight-healthcare.vercel.app/",
    githubLink:
      "https://github.com/abduIwahid/MediSight-HealthCare-Platform",
    tech: ["Next.js 14", "FastAPI", "scikit-learn", "XGBoost", "SHAP", "Supabase"],
    images: [AnchorImage1, AnchorImage2, AnchorImage3]
  },
  {
    name: "Predictly",
    content:
      "An AI-powered web application that predicts property valuations for the Pakistani housing market using a trained machine learning model with comprehensive data analysis.",
    link: "https://predict-home.vercel.app/",
    githubLink:
      "https://github.com/abduIwahid/Predictly",
    tech: ["Python", "Flask", "scikit-learn", "JavaScript", "ML"],
    images: [AddaxImage1, AddaxImage2, AddaxImage3]
  },
  {
    name: "Smart Doctor AI",
    content:
      "An AI-powered medical assistant that analyzes symptoms and delivers preliminary health insights through an intelligent conversational interface, built with Python and machine learning NLP.",
    link: "https://smartdoctor-ai.vercel.app/",
    githubLink:
      "https://github.com/abduIwahid/Smart-Doctor-Connect",
    tech: ["Python", "AI/ML", "NLP", "Healthcare", "FastAPI"],
    images: [KnowmoImage1, KnowmoImage2]
  },
  {
    name: "Churnex",
    content:
      "A machine learning pipeline and analytics engine that predicts customer churn using classification algorithms. Analyzes subscription data, usage patterns, and billing metrics.",
    link: "https://churnex.vercel.app/",
    githubLink:
      "https://github.com/abduIwahid/Churnex",
    tech: ["Python", "scikit-learn", "Pandas", "XGBoost", "ML"],
    images: [WalletImage1, WalletImage2]
  }
];

function ProjectsMain() {
  return (
    <main className="among-font min-h-screen w-full">
      <Vent path="/skills" side="right" open={true} className="w-15 h-15"/>

      <div className="flex flex-col items-center pt-10">
        <p className="text-6xl">Projects</p>
      </div>
      
      {/* Responsive layout: row on desktop, column on mobile */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-16 pr-0 lg:pr-12">
        <div className="flex-shrink-0">
          <SecurityRoom/>
        </div>
        <div className="flex-1 flex justify-center py-4 lg:py-10 w-full">
          <MappedProjects projects={projectsArray}/>
        </div>
      </div>
    </main>
  );
}

export default ProjectsMain;