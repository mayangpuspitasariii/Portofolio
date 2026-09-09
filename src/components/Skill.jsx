import React, { useState } from "react";

import {
  FaReact,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiCodeigniter,
  SiExpress,
  SiPostman,
  SiCanva,
  SiMysql,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "CodeIgniter", icon: <SiCodeigniter /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
];

const Skill = () => {
  const [showAll, setShowAll] = useState(false);

  const initialSkillsToShow = 6;

  const displayedSkills = showAll
    ? skills
    : skills.slice(0, initialSkillsToShow);

  return (
    <section
      id="skill"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            What I Work With
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My <span className="text-sky-400">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Teknologi dan tools yang saya gunakan dalam pengembangan aplikasi
            web, pengelolaan database, serta perancangan dan pengembangan
            sistem.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${
            showAll ? "" : "xl:grid-cols-6"
          }`}
        >
          {displayedSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl border border-white/5 bg-slate-900/60 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-slate-800 text-3xl text-sky-400 transition-all duration-300 group-hover:border-sky-400/20 group-hover:bg-sky-400/10 group-hover:text-sky-300">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p className="text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </p>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-400 transition-all duration-300 group-hover:w-1/2" />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-medium text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/20 hover:text-sky-200"
          >
            {showAll ? "Lihat Lebih Sedikit" : "Lihat Semua Skill"}

            <span
              className={`transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex">
        {" "}
        <span className="text-xs uppercase tracking-widest"> Scroll </span>{" "}
        <div className="h-8 w-px bg-gradient-to-b from-sky-400 to-transparent" />{" "}
      </div>{" "}
    </section>
  );
};

export default Skill;
