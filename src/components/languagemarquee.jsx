import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaPhp, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript,SiPhpmyadmin } from 'react-icons/si';
const languages = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Laravel', icon: FaLaravel, color: 'text-red-500' },
  { name: 'Figma', icon: FaFigma, color: 'text-blue-700' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-blue-500' },
  { name: 'PHP', icon: FaPhp, color: 'text-purple-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Phpmyadmin', icon: SiPhpmyadmin, color: 'text-orange-500' },
];

const LanguageBox = ({ name, icon: Icon, color, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center p-4 m-2 rounded-lg transition-all duration-300 ${
        isHovered ? `${color} bg-gray-800` : 'text-gray-400 bg-gray-700'
      }`}
      style={{ width: '120px', height: '120px' }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(false);
      }}
    >
      <Icon className="text-4xl mb-2" />
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
};

const LanguageMarquee = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gray-900 py-16 px-4 overflow-hidden" id="skills">
      <h2 className=" text-2xl mb:text-3xl font-bold text-white mb-2 text-center" data-aos="fade-up">My Skills</h2>
      <div className="h-2 w-28 bg-yellow-600 rounded-full mb-10 mx-auto" data-aos="fade-up"></div>

      <div className="flex overflow-hidden">
        <div
          className={`flex animate-marquee ${isHovered ? 'paused' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {languages.map((lang, index) => (
            <LanguageBox key={index} {...lang} onHover={setIsHovered} />
          ))}
        </div>
        <div
          className={`flex animate-marquee ${isHovered ? 'paused' : ''}`}
          aria-hidden="true"
        >
          {languages.map((lang, index) => (
            <LanguageBox key={index + languages.length} {...lang} onHover={setIsHovered} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageMarquee;
