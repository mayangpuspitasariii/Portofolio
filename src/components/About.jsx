import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import myFoto from "../asset/Mayang.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-12 lg:px-24"
    >
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            About <span className="text-sky-400">Me</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* PHOTO */}
          <div className="flex justify-center">
            <div className="group relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 opacity-20 blur-2xl transition duration-500 group-hover:opacity-40" />

              {/* Image */}
              <div className="relative rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 p-1">
                <img
                  src={myFoto}
                  alt="Mayang Puspita Sari"
                  className="h-64 w-64 rounded-full object-cover border-4 border-slate-950 transition duration-500 group-hover:scale-105 md:h-80 md:w-80"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 rounded-2xl border border-slate-700 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur-md">
                <p className="text-xs text-slate-400">Based in</p>
                <p className="font-semibold text-sky-400">Indonesia 🇮🇩</p>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="mb-2 text-sm font-medium text-sky-400">Hello, Im</p>

            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              Mayang Puspita Sari
            </h3>

            <p className="mb-6 text-lg font-medium text-slate-300">
              Information Systems Graduate
            </p>

            <p className="mb-8 leading-8 text-slate-400">
              Saya merupakan lulusan Sistem Informasi dengan minat pada
              <span className="font-semibold text-white">
                {" "}
                Analisis Sistem
              </span>{" "}
              dan
              <span className="font-semibold text-white">
                {" "}
                Manajemen Proyek IT
              </span>
              . Saya terbiasa memahami kebutuhan sistem, merancang alur proses,
              membuat dokumentasi, serta berkolaborasi dalam pengembangan
              aplikasi berbasis web.
            </p>

            {/* Skills */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:-translate-y-1 hover:border-sky-500/50">
                <p className="mb-1 text-sm text-slate-400">Focus</p>
                <p className="font-semibold">System Analysis</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:-translate-y-1 hover:border-indigo-500/50">
                <p className="mb-1 text-sm text-slate-400">Interest</p>
                <p className="font-semibold">IT Project Management</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <p className="mb-3 text-sm text-slate-400">Technical Skills</p>

              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MySQL",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/mayangpuspitasari02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-400"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>

              <a
                href="https://github.com/mayangpuspitasariii"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-white"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>

              <a
                href="https://instagram.com/mayangpuspita._s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:text-pink-400"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
