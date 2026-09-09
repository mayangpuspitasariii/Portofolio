import React, { useState } from "react";

import portfolioImg from "../asset/prt.png";
import lazismu2 from "../asset/lazismu2.png";
import ecommerceImg from "../asset/online.jpeg";
import blogImg from "../asset/thread2.jpg";
import palestina from "../asset/palestina.jpg";
import tokoh from "../asset/tokoh.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi yang dibuat sebagai media untuk memperkenalkan diri, menampilkan keahlian, pengalaman, serta proyek yang telah saya kerjakan.",
    image: portfolioImg,
    link: "https://mayang-portofolio.vercel.app/",
    status: "Website Dalam Proses Pengembangan",
    demo: null,
    technologies: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Aplikasi Crowdfunding Lazismu Asahan",
    description:
      "Aplikasi crowdfunding untuk mendukung penggalangan dana dan penyaluran donasi Lazismu Asahan. Aplikasi menyediakan fitur pengelolaan program donasi, informasi target dan progres dana, serta proses donasi secara terintegrasi.",
    image: lazismu2,
    link: "https://crowfunding-app-seven.vercel.app/",
    status: "Selesai",
    demo: "https://lnkd.in/p/gMhR5TSS",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
  },
  {
    title: "Website Tokoh Online",
    description:
      "Aplikasi toko online pakaian dengan fitur katalog produk, pemesanan, dan pembayaran manual melalui upload bukti pembayaran. Sistem memiliki role Admin dan User untuk mendukung pengelolaan produk dan proses transaksi.",
    image: tokoh,
    link: "https://tokoku-seven-zeta.vercel.app/",
    status: "Dalam Proses Pengembangan",
    demo: null,
    technologies: ["React.js", "Tailwind CSS"],
  },

  {
    title: "Website Tokoh Kue",
    description:
      "Aplikasi toko Fudgy Brownies dengan fitur transaksi menggunakan metode pembayaran manual melalui upload bukti pembayaran. Memiliki role Admin dan User.",
    image: ecommerceImg,
    link: "https://e-commerce-weld-three-12.vercel.app/",
    status: "Website Dalam Proses Pengembangan",
    demo: null,
    technologies: ["React.js", "Tailwind CSS", "Express.js", "MySQL"],
  },

  {
    title: "Blog Platform",
    description:
      "Platform blog dengan fitur CRUD menggunakan React dan Tailwind CSS serta memanfaatkan API publik untuk menampilkan data.",
    image: blogImg,
    link: "https://app-forum-diskusi.vercel.app/",
    status: "Website Dalam Proses Pengembangan",
    demo: null,
    technologies: ["React.js", "Tailwind CSS", "Public API"],
  },

  {
    title: "Website Penggalangan Dana",
    description:
      "Aplikasi penggalangan dana khusus Palestina yang dikembangkan menggunakan React, Tailwind CSS, Node.js, Express.js, dan MongoDB.",
    image: palestina,
    link: "https://bersama-palestina.vercel.app/",
    status: "Selesai",
    demo: null,
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  // Tampilkan 4 project terlebih dahulu
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="project"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            My Recent Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My <span className="text-sky-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Beberapa proyek yang telah saya kerjakan sebagai bagian dari proses
            belajar dan pengembangan kemampuan di bidang web development dan
            sistem informasi.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-slate-900"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Status Projek */}
                {project.status && (
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      project.status === "Selesai"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-amber-400/20 bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    ● {project.status}
                  </span>
                )}

                {/* Description */}
                <p className="mb-5 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-400/10 bg-sky-400/5 px-3 py-1 text-xs font-medium text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {/* View Project */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                    >
                      View Project
                      <span>↗</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-500"
                    >
                      Project Belum Tersedia
                    </button>
                  )}

                  {/* Demo Video */}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-300"
                    >
                      <span>▶</span>
                      Demo Video
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-500"
                    >
                      <span>▶</span>
                      Demo Belum Tersedia
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tampilkan Semua Project */}
        {projects.length > 4 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-medium text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/20 hover:text-sky-200"
            >
              {showAll ? "Lihat Lebih Sedikit" : "Tampilkan Semua Project"}

              <span
                className={`transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>

        <div className="h-8 w-px bg-gradient-to-b from-sky-400 to-transparent" />
      </div>
    </section>
  );
};

export default Project;
