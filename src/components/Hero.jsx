import React, { useState, useEffect, useRef } from "react";
const Hero = () => {
  const texts = ["System Analyst", "IT Project Management", "React Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    const text = texts[textIndex];
    let i = isDeleting ? text.length : 0;
    const updateText = () => {
      if (isDeleting) {
        setDisplayText(text.substring(0, i));
        i--;
        if (i < 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          timerRef.current = setTimeout(updateText, 500);
        } else {
          timerRef.current = setTimeout(updateText, 50);
        }
      } else {
        setDisplayText(text.substring(0, i));
        i++;
        if (i > text.length) {
          setIsDeleting(true);
          timerRef.current = setTimeout(updateText, 1800);
        } else {
          timerRef.current = setTimeout(updateText, 90);
        }
      }
    };
    updateText();
    return () => clearTimeout(timerRef.current);
  }, [textIndex, isDeleting]);
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-6 text-white sm:px-10 lg:px-20"
    >
      {" "}
      {/* Background Glow */}{" "}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />{" "}
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />{" "}
      {/* Content */}{" "}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center">
        {" "}
        <div className="w-full">
          {" "}
          {/* Small Introduction */}{" "}
          <div className="mb-5 flex items-center gap-3">
            {" "}
            <span className="h-px w-10 bg-sky-400" />{" "}
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
              {" "}
              Welcome to my portfolio{" "}
            </span>{" "}
          </div>{" "}
          {/* Main Heading */}{" "}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {" "}
            Hello, Im{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Mayang{" "}
            </span>{" "}
            <span className="text-white">.</span>{" "}
          </h1>{" "}
          {/* Role */}{" "}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xl font-semibold sm:text-2xl md:text-3xl">
            {" "}
            <span className="text-slate-300"> Im a </span>{" "}
            <span className="text-sky-400">
              {" "}
              {displayText}{" "}
              <span className="ml-1 animate-pulse text-sky-300"> | </span>{" "}
            </span>{" "}
          </div>{" "}
          {/* Description */}{" "}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {" "}
            Lulusan Sistem Informasi yang memiliki minat pada{" "}
            <span className="font-semibold text-slate-200">
              {" "}
              Analisis Sistem{" "}
            </span>{" "}
            dan{" "}
            <span className="font-semibold text-slate-200">
              {" "}
              Front-End Developer{" "}
            </span>
            . Memiliki pengalaman dalam perancangan sistem dan pengembangan
            aplikasi berbasis web menggunakan teknologi modern.{" "}
          </p>{" "}
          {/* CTA */}{" "}
          <div className="mt-9 flex flex-wrap gap-4">
            {" "}
            {/* Download CV */}{" "}
            <a
              href="/cv/Mayang Puspita Sari - CV.pdf"
              download="CV Mayang Puspita Sari.pdf"
              className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
            >
              {" "}
              Download CV{" "}
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                {" "}
                ↓{" "}
              </span>{" "}
            </a>{" "}
          </div>{" "}
          {/* Quick Information */}{" "}
          <div className="mt-14 flex flex-wrap gap-8 border-t border-slate-800 pt-8">
            {/* GPA */}
            <div>
              <p className="text-2xl font-bold text-white">3.80</p>
              <p className="mt-1 text-sm text-slate-500">GPA</p>
            </div>

            <div className="h-10 w-px bg-slate-800" />

            {/* Education */}
            <div>
              <p className="text-2xl font-bold text-white">S1</p>
              <p className="mt-1 text-sm text-slate-500">Information Systems</p>
              <p className="mt-1 text-xs text-sky-400">Universitas Royal</p>
            </div>

            <div className="h-10 w-px bg-slate-800" />

            {/* Skill */}
            <div>
              <p className="text-2xl font-bold text-white">React</p>
              <p className="mt-1 text-sm text-slate-500">Web Development</p>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      {/* Scroll Indicator */}{" "}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex">
        {" "}
        <span className="text-xs uppercase tracking-widest"> Scroll </span>{" "}
        <div className="h-8 w-px bg-gradient-to-b from-sky-400 to-transparent" />{" "}
      </div>{" "}
    </section>
  );
};
export default Hero;
