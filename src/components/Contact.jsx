import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20"
    >
      {" "}
      {/* Background Decoration */}{" "}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />{" "}
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />{" "}
      <div className="relative mx-auto max-w-5xl">
        {" "}
        {/* Section Heading */}{" "}
        <div className="mb-14 text-center">
          {" "}
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            {" "}
            Get In Touch{" "}
          </p>{" "}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {" "}
            Let's <span className="text-sky-400">Connect</span>{" "}
          </h2>{" "}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {" "}
            Tertarik untuk berdiskusi, berkolaborasi, atau memiliki kesempatan
            kerja yang sesuai? Jangan ragu untuk menghubungi saya.{" "}
          </p>{" "}
        </div>{" "}
        {/* Contact Card */}{" "}
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8">
          {" "}
          <div className="grid gap-4 sm:grid-cols-2">
            {" "}
            {/* Location */}{" "}
            <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/5">
              {" "}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-lg text-sky-400 transition-all duration-300 group-hover:bg-sky-400/20">
                {" "}
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {" "}
                  Location{" "}
                </p>{" "}
                <p className="text-sm font-medium text-slate-200">
                  {" "}
                  Kisaran, Sumatra Utara{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Email */}{" "}
            <a
              href="mailto:mayangpuspitas410@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/5"
            >
              {" "}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-lg text-sky-400 transition-all duration-300 group-hover:bg-sky-400/20">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </div>{" "}
              <div className="min-w-0">
                {" "}
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {" "}
                  Email{" "}
                </p>{" "}
                <p className="truncate text-sm font-medium text-slate-200 transition-colors duration-300 group-hover:text-sky-300">
                  {" "}
                  mayangpuspitas410@gmail.com{" "}
                </p>{" "}
              </div>{" "}
            </a>{" "}
          </div>{" "}
          {/* Social Media */}{" "}
          <div className="mt-8 border-t border-white/5 pt-8">
            {" "}
            <p className="mb-5 text-center text-sm text-slate-500">
              {" "}
              Find me on{" "}
            </p>{" "}
            <div className="flex justify-center gap-3">
              {" "}
              {/* LinkedIn */}{" "}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedinIn} />{" "}
              </a>{" "}
              {/* GitHub */}{" "}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400"
              >
                {" "}
                <FontAwesomeIcon icon={faGithub} />{" "}
              </a>{" "}
              {/* Instagram */}{" "}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400"
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Copyright */}{" "}
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          {" "}
          <p className="text-sm text-slate-500">
            {" "}
            © {new Date().getFullYear()} Mayang Puspita Sari. All rights
            reserved.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};
export default Contact;
