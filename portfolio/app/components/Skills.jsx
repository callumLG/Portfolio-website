import React from "react";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Zap,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "HTML & CSS",
    description: "Semantic HTML, modern CSS, Flexbox, Grid, and clean layouts",
  },
  {
    icon: Zap,
    name: "JavaScript",
    description:
      "Core JavaScript, ES6+, DOM manipulation, basic async patterns",
  },
  {
    icon: Palette,
    name: "React",
    description: "Functional components, hooks, props, basic state management",
  },
  {
    icon: Database,
    name: "Backend Fundamentals",
    description:
      "Basic Node.js concepts, REST APIs, and understanding how data flows",
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description:
      "Mobile-first layouts, media queries, and practical responsiveness",
  },
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description:
      "Version control, branching, commits, and managing personal projects",
  },
];

function Skills() {
  return (
    <div>
      <div className="mx-auto bg-[#111111]">
        <h1 className="text-5xl font-bold text-center text-white">Skills</h1>
        <div>
          <div className="text-white bg-black ">
            <Code className="text-[#A8C5E8] text-2xl inline-block" />
            <h2>HTML & CSS</h2>
            <p>Semantic HTML, modern CSS, Flexbox, Grid, and clean layouts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
