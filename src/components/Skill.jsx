import React, { useState } from 'react';
import {
  FaReact,
  FaJs,
  FaPhp,
  FaNodeJs,
  FaBootstrap,
  FaLaravel,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiCodeigniter,
  SiExpress,
  SiPostman,
  SiCanva,
  SiMysql,
  SiFigma,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: 'bg-blue-400' },
  { name: 'JavaScript', icon: <FaJs />, color: 'bg-yellow-400' },
  { name: 'PHP', icon: <FaPhp />, color: 'bg-purple-500' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'bg-green-500' },
  { name: 'CodeIgniter', icon: <SiCodeigniter />, color: 'bg-red-500' },
  { name: 'Laravel', icon: <FaLaravel />, color: 'bg-red-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-teal-400' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: 'bg-indigo-500' },
  { name: 'Express', icon: <SiExpress />, color: 'bg-gray-500' },
  { name: 'Canva', icon: <SiCanva />, color: 'bg-blue-500' },
  { name: 'Postman', icon: <SiPostman />, color: 'bg-orange-500' },
  { name: 'MySQL', icon: <SiMysql />, color: 'bg-blue-600' },
  { name: 'Figma', icon: <SiFigma />, color: 'bg-pink-500' },
];

const Skill = () => {
  const [showAll, setShowAll] = useState(false);

  const initialSkillsToShow = 6; // tampilkan 6 dulu biar balance

  return (
    <section className="bg-gray-900 py-20" id="skill">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          My <span className="text-blue-400">Skills</span>
        </h2>

        {/* Grid Skill */}
        <div
          className={`grid ${
            showAll
              ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'
              : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-center'
          }`}
        >
          {(showAll ? skills : skills.slice(0, initialSkillsToShow)).map(
            (skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center p-5 bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`text-white text-4xl w-20 h-20 rounded-full flex items-center justify-center mb-3 ${skill.color}`}
                >
                  {skill.icon}
                </div>
                <p className="text-white font-medium text-center">
                  {skill.name}
                </p>
              </div>
            ),
          )}
        </div>

        {/* Tombol */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 text-white py-2 px-8 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            {showAll ? 'Lihat Lebih Sedikit' : 'Lihat Semua Skill'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skill;

