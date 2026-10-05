import React from "react";
import Image from "next/image";

import GithubImage from "@/assets/github.svg";
import LinkedInImage from "@/assets/linkedin.svg";
import Leetcodeimage from "@/assets/leetcode.svg";
import InstagramImage from "@/assets/instagram-logo.svg";

function ProfileHero() {
  return (
    <section className="w-full px-4 py-8 text-white sm:px-6 md:px-10 md:py-12 lg:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:items-start lg:gap-12">
        {/* Left - Image */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-[#7dd3fc]/25 blur-3xl" />
          <div className="absolute inset-2 -z-10 rounded-full border border-[#7dd3fc]/70 shadow-[0_0_35px_rgba(125,211,252,0.5)]" />
          <div className="rounded-[2rem] border-4 border-[#f8fafc]/80 bg-[#0f172a] p-2 shadow-[0_0_30px_rgba(59,130,246,0.28)] ring-2 ring-[#38bdf8]/60">
            <Image
              src="/pfp.png"
              alt="Profile image"
              className="h-auto w-32 rounded-[1.4rem] border border-white/10 object-cover object-top sm:w-44 md:w-52 lg:w-52"
              width={220}
              height={220}
            />
          </div>
        </div>

        {/* Right - Info */}
        <div className="flex w-full max-w-3xl flex-col gap-8">
          {/* Name + Socials */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <h1
                className="among-font pt-10 text-4xl leading-tight tracking-widest break-words sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                Abdul Wahid
              </h1>

              <p className="mt-2 font-mono text-base font-light text-cyan-200 sm:text-lg md:text-xl">
                AI/ML Developer
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/abduIwahid" target="_blank" aria-label="GitHub">
                <Image
                  src={GithubImage}
                  className="h-5 w-5 rounded-full border border-white/10 bg-slate-950/60 p-1 invert transition-all duration-200 hover:-translate-y-0.5 hover:scale-110 hover:bg-white hover:invert-0"
                  alt="GitHub"
                />
              </a>

              <a href="https://linkedin.com/in/abdu1wahid" target="_blank" aria-label="LinkedIn">
                <Image
                  src={LinkedInImage}
                  className="h-5 w-5 rounded-sm bg-white/90 p-0.5 transition-all duration-200 hover:-translate-y-0.5 hover:scale-110"
                  alt="LinkedIn"
                />
              </a>

              <a href="https://leetcode.com/u/abdu1wahid/" target="_blank" aria-label="LeetCode">
                <Image
                  src={Leetcodeimage}
                  className="h-5 w-5 rounded-sm bg-[#f8fafc] p-0.5 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
                  alt="LeetCode"
                />
              </a>

              <a href="https://instagram.com/abdu1vvahid" target="_blank" aria-label="Instagram">
                <Image
                  src={InstagramImage}
                  className="h-5 w-5 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5 transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="w-full">
            <p className="font-mono text-lg sm:text-xl">About</p>

            <hr className="my-2 border-0.5 border-sky-300/60" />

            <p className="font-mono text-sm leading-relaxed text-justify text-slate-200 sm:text-base md:text-md">
              Hey, I&apos;m Abdul Wahid. I&apos;m a 5th Semester Artificial Intelligence student at COMSATS University Islamabad, Attock Campus, with a strong passion for Machine Learning and Python development. I specialize in implementing ML algorithms from scratch and building intelligent systems that solve real-world challenges. I use modern AI tools like GitHub Copilot and Claude to supercharge my development workflow. I&apos;m driven by curiosity, discipline, and a goal to contribute to technology that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileHero;
