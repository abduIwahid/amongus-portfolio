"use client";

import { MessageSquareText, Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactMain() {
  const contactLinks = [
    {
      name: "Email",
      value: "abdulwahid.connects@gmail.com",
      icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" />,
      href: "mailto:abdulwahid.connects@gmail.com",
      color: "hover:bg-blue-100 hover:text-blue-700 hover:border-blue-500",
    },
    {
      name: "Phone",
      value: "+92 307-8141252",
      icon: <Phone className="h-6 w-6 sm:h-8 sm:w-8" />,
      href: "tel:+923078141252",
      color: "hover:bg-green-100 hover:text-green-700 hover:border-green-500",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/abdu1wahid",
      icon: <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />,
      href: "https://www.linkedin.com/in/abdu1wahid",
      color: "hover:bg-sky-100 hover:text-sky-700 hover:border-sky-500",
    },
    {
      name: "GitHub",
      value: "github.com/abduIwahid",
      icon: <Github className="h-6 w-6 sm:h-8 sm:w-8" />,
      href: "https://github.com/abduIwahid",
      color: "hover:bg-gray-200 hover:text-black hover:border-black",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-black/40 p-4 sm:p-8">
      {/* Responsive Wrapper */}
      <div className="relative w-full max-w-2xl rounded-[16px] sm:rounded-[24px] border-[3px] sm:border-[5px] border-gray-700 bg-gray-400 p-2 sm:p-3 pr-12 sm:pr-16 shadow-2xl">
        
        {/* Inner panel */}
        <div className="rounded-[12px] sm:rounded-[18px] border-[2px] sm:border-[4px] border-gray-600 bg-slate-300 p-4 sm:p-6">
          
          <div className="among-font flex items-center justify-center gap-3 text-3xl sm:text-5xl mb-6 pb-4 border-b-4 border-gray-400/30">
            <MessageSquareText className="h-8 w-8 sm:h-12 sm:w-12 text-gray-900" />
            <p className="font-bold text-black tracking-widest">CONTACT</p>
          </div>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`flex items-center gap-4 bg-white border-[3px] border-gray-400 rounded-xl p-3 sm:p-4 text-gray-700 transition-all duration-300 ${link.color}`}
              >
                <div className="flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="font-bold text-sm sm:text-base uppercase tracking-wider">{link.name}</span>
                  <span className="font-mono text-xs sm:text-lg truncate">{link.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

        {/* Side button */}
        <button className="absolute right-[2px] sm:right-[4px] top-1/2 flex h-10 w-10 sm:h-14 sm:w-14 -translate-y-1/2 items-center justify-center rounded-full border-[2px] sm:border-[4px] border-gray-600 bg-gray-200 shadow-lg cursor-default">
          <div className="h-5 w-5 sm:h-8 sm:w-8 rounded-full bg-white" />
        </button>
      </div>
    </div>
  );
}
