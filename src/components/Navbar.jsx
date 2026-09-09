import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "home",
    "about",
    "skill",
    "project",
    "certificate",
    "contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="group text-2xl font-bold tracking-tight text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Mayang
          <span className="text-sky-400 transition-colors duration-300 group-hover:text-sky-300">
            .
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="group relative py-2 text-sm font-medium capitalize text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  {item}

                  {/* Underline */}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-medium text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/20 hover:text-sky-200"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-5 sm:px-10">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="block border-b border-white/5 py-4 text-sm font-medium capitalize text-slate-400 transition-colors duration-300 hover:pl-2 hover:text-sky-400"
              >
                {item}
              </a>
            </li>
          ))}

          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-center text-sm font-medium text-sky-300 transition-all duration-300 hover:bg-sky-400/20"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
