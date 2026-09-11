import React, { useState } from "react";
const certificates = [
  {
    title: "Studi Independen Kampus Merdeka",
    issuer: "Kampus Merdeka",
    year: "2024",
    image: "/certificates/km.jpeg",
  },
  {
    title: "Sertifikat Dicoding Pengembang React dan Back-End",
    issuer: "Dicoding",
    year: "2024",
    image: "/certificates/dicoding.jpeg",
  },
  {
    title: "Penghargaan Proyek Terbaik Dicoding Studi Independen",
    issuer: "Dicoding",
    year: "2024",
    image: "/certificates/terbaik.jpeg",
  },
  {
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding",
    year: "2024",
    link: "https://www.dicoding.com/certificates/72ZD8D2RVZYW",
  },
  {
    title: "Belajar Dasar Struktur SQL",
    issuer: "Dicoding",
    year: "2024",
    link: "https://www.dicoding.com/certificates/1RXY6V6LKZVM",
  },
  {
    title: "Membuat Aplikasi Back-End Pemula",
    issuer: "Dicoding",
    year: "2024",
    link: "https://www.dicoding.com/certificates/N9ZOMY028PG5",
  },
  {
    title: "Menjadi React Developer Expert",
    issuer: "Dicoding",
    year: "2024",
    link: "https://www.dicoding.com/certificates/L4PQ1QK2VXO1",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    year: "2025",
    link: "https://www.dicoding.com/certificates/N9ZO9V966XG5",
  },
  {
    title: "Meniti Karir Sebagai Software Developer",
    issuer: "Dicoding",
    year: "2024",
    link: "https://www.dicoding.com/certificates/ERZR10NKOZYV",
  },
];
const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);
  return (
    <section
      id="certificate"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      {" "}
      {/* Background Decoration */}{" "}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />{" "}
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />{" "}
      <div className="relative mx-auto max-w-6xl">
        {" "}
        {/* Section Heading */}{" "}
        <div className="mb-14 text-center">
          {" "}
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            {" "}
            My Achievements{" "}
          </p>{" "}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {" "}
            My <span className="text-sky-400">Certificates</span>{" "}
          </h2>{" "}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {" "}
            Sertifikat dan penghargaan yang saya peroleh melalui proses
            pembelajaran, pengembangan keterampilan, dan proyek yang telah saya
            kerjakan.{" "}
          </p>{" "}
        </div>{" "}
        {/* Certificate Grid */}{" "}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {" "}
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-slate-900"
            >
              {" "}
              {/* Certificate Preview */}{" "}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-slate-900">
                {" "}
                {cert.image ? (
                  <>
                    {" "}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105"
                      onClick={() => setSelectedImage(cert.image)}
                    />{" "}
                    {/* Image Overlay */}{" "}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      {" "}
                      <span className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                        {" "}
                        Lihat Preview{" "}
                      </span>{" "}
                    </div>{" "}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center px-6 text-center">
                    {" "}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-2xl text-sky-400">
                      {" "}
                      ↗{" "}
                    </div>{" "}
                    <p className="text-sm text-slate-400">
                      {" "}
                      Sertifikat tersedia secara online{" "}
                    </p>{" "}
                  </div>
                )}{" "}
              </div>{" "}
              {/* Certificate Content */}{" "}
              <div className="p-6">
                {" "}
                {/* Title */}{" "}
                <h3 className="mb-3 min-h-[56px] text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-sky-300">
                  {" "}
                  {cert.title}{" "}
                </h3>{" "}
                {/* Issuer & Year */}{" "}
                <div className="mb-5 flex items-center justify-between text-sm">
                  {" "}
                  <span className="text-slate-400"> {cert.issuer} </span>{" "}
                  <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {" "}
                    {cert.year}{" "}
                  </span>{" "}
                </div>{" "}
                {/* Certificate Link */}{" "}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-medium text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/20 hover:text-sky-200"
                  >
                    {" "}
                    Lihat Sertifikat <span>↗</span>{" "}
                  </a>
                )}{" "}
                {/* Image Certificate Label */}{" "}
                {cert.image && (
                  <button
                    onClick={() => setSelectedImage(cert.image)}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-2.5 text-sm font-medium text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/20 hover:text-sky-200"
                  >
                    {" "}
                    Lihat Sertifikat <span>↗</span>{" "}
                  </button>
                )}{" "}
              </div>{" "}
              {/* Bottom Accent */}{" "}
              <div className="h-px w-0 bg-sky-400 transition-all duration-500 group-hover:w-full" />{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Show More Button */}{" "}
        {certificates.length > 6 && (
          <div className="mt-12 text-center">
            {" "}
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-medium text-sky-300 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-400/20 hover:text-sky-200"
            >
              {" "}
              {showAll ? "Lihat Lebih Sedikit" : "Lihat Semua Sertifikat"}{" "}
              <span
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                {" "}
                ↓{" "}
              </span>{" "}
            </button>{" "}
          </div>
        )}{" "}
      </div>{" "}
      {/* Image Modal */}{" "}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {" "}
          <div className="relative max-h-[90vh] max-w-5xl">
            {" "}
            {/* Close Button */}{" "}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-xl text-white transition-all duration-300 hover:bg-sky-500"
              aria-label="Tutup preview"
            >
              {" "}
              ✕{" "}
            </button>{" "}
            <img
              src={selectedImage}
              alt="Certificate Preview"
              className="max-h-[85vh] max-w-full rounded-2xl border border-white/10 object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />{" "}
          </div>{" "}
        </div>
      )}{" "}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 md:flex">
        {" "}
        <span className="text-xs uppercase tracking-widest"> Scroll </span>{" "}
        <div className="h-8 w-px bg-gradient-to-b from-sky-400 to-transparent" />{" "}
      </div>{" "}
    </section>
  );
};
export default Certificate;
