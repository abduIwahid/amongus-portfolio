import React from "react";
import AvatarBoy from "@/assets/avatarBoy.png";
import Image from "next/image";
import Link from "next/link";

function MyInfo() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 select-text max-w-5xl mx-auto">
      {/* Top Section: Avatar & About */}
      <div className="text-zinc-700 font-mono flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <Image
          src={AvatarBoy}
          // w-48 sm:w-56 md:w-64 lg:w-72 h-auto, 
          className="h-100 w-auto old flex-shrink-0"
          alt="Abdul Wahid"
        />
        <div className="flex-1 w-full px-2 md:px-0 text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Abdul Wahid</h1>
            <p className="text-base sm:text-lg text-gray-500 mt-1">AI/ML Developer</p>
          </div>
          <div className="w-full">
            <p className="font-semibold">about</p>
            <hr className="border-t border-gray-400 my-2" />
            <p className="text-justify text-sm sm:text-base leading-relaxed">
              Hey, I&apos;m Abdul Wahid. <br className="hidden sm:block" /> I&apos;m a 5th Semester Artificial Intelligence student at COMSATS University Islamabad, Attock Campus, with a strong passion for Machine Learning and Python development. I specialize in implementing ML algorithms from scratch and building intelligent systems that solve real-world challenges. I&apos;m driven by curiosity and discipline, constantly working on AI research and developer tools that make a meaningful impact.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Details */}
      <div className="flex flex-col font-mono text-zinc-700 mt-8 sm:mt-12 space-y-8">
        {/* Skills */}
        <div className="flex flex-col">
          <p className="font-semibold">Skills</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="text-sm sm:text-base space-y-1">
            <p><span className="font-semibold">Languages:</span> Python (85%), Java (80%), C++ (70%), JavaScript (75%), HTML/CSS</p>
            <p><span className="font-semibold">AI/ML:</span> scikit-learn, NumPy, Pandas, XGBoost, SHAP, ML Algorithms</p>
            <p><span className="font-semibold">Deep Learning:</span> Neural Networks, Backpropagation, MLP (65% proficiency)</p>
            <p><span className="font-semibold">Databases:</span> MySQL (70%), Supabase, Data Engineering</p>
            <p><span className="font-semibold">Core CS:</span> Data Structures & Algorithms (82%), OOP, Problem Solving</p>
            <p><span className="font-semibold">Tools:</span> Git, GitHub, VS Code, Copilot, Claude, FastAPI, Flask, Next.js 14</p>
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col">
          <p className="font-semibold">Education</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
            <p className="font-semibold text-base sm:text-lg">
              COMSATS University Islamabad{" "}
              <span className="font-light text-sm italic block sm:inline">Attock Campus, Punjab, Pakistan</span>
            </p>
            <p className="mt-1 sm:mt-0 text-sm sm:text-base font-medium">2024-2028</p>
          </div>
          <p className="text-sm sm:text-base mt-2 sm:mt-1">
            BS Artificial Intelligence (5th Semester) —{" "}
            <span className="font-semibold break-words">CGPA: 3.46/4.00</span>
          </p>
        </div>

        {/* Extracurricular Activities */}
        <div className="flex flex-col">
          <p className="font-semibold">Extracurricular</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="text-sm sm:text-base space-y-3">
            <div>
              <p className="font-semibold">AI/ML Team Member <span className="font-normal text-xs sm:text-sm text-gray-500 float-right">2026 - 2027</span></p>
              <p className="text-xs sm:text-sm">Google Developer Groups On Campus (GDGoC) · CUI Attock</p>
            </div>
            <div>
              <p className="font-semibold">Mind to Machine AI Hackathon <span className="font-normal text-xs sm:text-sm text-gray-500 float-right">May 2026</span></p>
              <p className="text-xs sm:text-sm">Participant · CUI Wah Campus</p>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="flex flex-col">
          <p className="font-semibold">Certificates</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="text-sm sm:text-base space-y-3">
            <div>
              <p className="font-semibold">Google AI Essential Specialization <span className="font-normal text-xs sm:text-sm text-gray-500 float-right">May 2026</span></p>
              <p className="text-xs sm:text-sm">Google Career Certificates · Coursera</p>
            </div>
            <div>
              <p className="font-semibold">AI & Machine Learning Developer <span className="font-normal text-xs sm:text-sm text-gray-500 float-right">Apr 2026</span></p>
              <p className="text-xs sm:text-sm">Programming Hub</p>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col">
          <p className="font-semibold">Socials</p>
          <hr className="border-t border-gray-400 my-2" />
          <div className="flex flex-row gap-6 sm:gap-10 flex-wrap text-sm sm:text-base">
            <a
              href="https://linkedin.com/in/abdu1wahid"
              className="underline hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/abduIwahid"
              className="underline hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://leetcode.com/u/abdu1wahid/"
              className="underline hover:text-yellow-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            <a
              href="https://instagram.com/abdu1vvahid"
              className="underline hover:text-pink-600 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <p className="font-semibold">Contact</p>
          <hr className="border-t border-gray-400 my-2" />
          <p className="text-sm sm:text-base break-words">
            +92 307-8141252 <span className="hidden sm:inline mx-2">|</span> 
            <span className="block sm:inline mt-1 sm:mt-0">abdulwahid.connects@gmail.com</span>
          </p>
        </div>
        <Link href="/profile" className="text-black underline">
          Know more about me &gt;
        </Link>
      </div>
    </div>
  );
}

export default MyInfo;
