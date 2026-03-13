import React from "react";
import { Github, Linkedin } from "lucide-react";
function About() {
  return (
    <div
      id="about"
      className="text-white tracking-tight mx-auto my-40 flex flex-col items-center gap-4 max-w-3xl text-center"
    >
      <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <p className="text-base  leading-relaxed opacity-90 w-screen px-5 lg:w-250 text-left">
          I'm a junior web developer focused on building clean, reliable web
          interfaces using modern tools. I care about structure, readability,
          and writing code that's easy to maintain. I'm actively improving my
          skills through hands-on projects and learning by building, breaking,
          and fixing real things.
        </p>
        <img
          src="/avitar.avif"
          alt="avitar"
          className="w-50  lg:w-100  rounded-full ml-4 border-2 border-gray-800 "
        />
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 lg:flex-col">
          {/* <a
            href="https://www.linkedin.com/in/callum-govender-027a9b29a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 sm:px-4 sm:py-2 hover:text-[#A8C5E8] hover:border-[#A8C5E8]/50 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">
              LinkedIn
            </span>
          </a> */}

          <a
            href="https://github.com/callumLG"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 sm:px-4 sm:py-2 hover:text-[#A8C5E8] hover:border-[#A8C5E8]/50 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          My Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <p className="text-sm sm:text-base rounded-full border border-gray-400 px-4 py-2 hover:border-[#A8C5E8] transition-all duration-300">
            JavaScript
          </p>
          <p className="text-sm sm:text-base rounded-full border border-gray-400 px-4 py-2 hover:border-[#A8C5E8] transition-all duration-300">
            React
          </p>
          <p className="text-sm sm:text-base rounded-full border border-gray-400 px-4 py-2 hover:border-[#A8C5E8] transition-all duration-300">
            Next.js
          </p>
          <p className="text-sm sm:text-base rounded-full border border-gray-400 px-4 py-2 hover:border-[#A8C5E8] transition-all duration-300">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
