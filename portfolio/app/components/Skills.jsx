import React from "react";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Zap,
  GitBranch,
} from "lucide-react";

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
