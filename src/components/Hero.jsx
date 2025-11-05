import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const texts = ['Junior Developer', 'React Developer', 'System Analyst'];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null); // Menggunakan useRef untuk menyimpan timer

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
          timerRef.current = setTimeout(updateText, 500); // Delay before starting the next text
        } else {
          timerRef.current = setTimeout(updateText, 50); // Speed of deletion
        }
      } else {
        setDisplayText(text.substring(0, i));
        i++;
        if (i > text.length) {
          setIsDeleting(true);
          timerRef.current = setTimeout(updateText, 1000); // Delay before starting to delete
        } else {
          timerRef.current = setTimeout(updateText, 100); // Speed of typing
        }
      }
    };

    // Start the typing/deleting process
    updateText();

    // Cleanup function to clear the timer
    return () => clearTimeout(timerRef.current);
  }, [textIndex, isDeleting]);

  return (
    <div
      className="bg-gray-900 bg-cover bg-center h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-40 text-center md:text-left"
      id="home"
    >
      <div className="text-white">
        {/* Heading utama */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hai! 👋😊
        </h1>

        {/* Nama dan jabatan */}
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Nama Saya{' '}
          <span className="text-lg sm:text-3xl md:text-4xl font-bold text-blue-300">
            Mayang Puspita Sari
          </span>
        </p>
        <p className="text-sm sm:text-lg md:text-xl font-bold">
          Saya Seorang{' '}
          <span className="font-bold text-blue-300 text-lg sm:text-2xl md:text-4xl">
            {displayText}
          </span>
        </p>

        {/* Tombol Download CV */}
        <a
          href="/cv/resume-mayang.pdf" // Path file PDF ada di public/cv/
          download="CV Mayang Puspita Sari.pdf" // Nama file saat diunduh
          className="mt-6 bg-transparent border-2 border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 inline-block text-center"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Hero;

