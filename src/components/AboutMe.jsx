import React, { useState } from 'react';
import dark from "../image/Dark.png";
import light from "../image/Light.png";

const AboutMe = () => {
  // State to toggle between dark and light images
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://drive.google.com/drive/folders/15hvzq6b-kQKN8AnYp7rZMaVjw6viyg5k?usp=drive_link', '_blank');
  };

  return (
    <section className="relative bg-gray-800 py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={isHovered ? light : dark} // Change image on hover
            alt="Your Profile"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-2 border-white transition-transform duration-500 transform hover:scale-110"
            onMouseEnter={() => setIsHovered(true)}  // Set isHovered to true on hover
            onMouseLeave={() => setIsHovered(false)} // Set isHovered to false when hover ends
          />
        </div>

        {/* About Me Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" data-aos="fade-right">About Me</h2>
          <div className="h-2 w-32 bg-yellow-600 rounded-full mb-3 mx-auto md:mx-0" data-aos="fade-right"></div>
<div data-aos="fade-right">
          <p className="text-gray-300 text-base font-normal md:text-lg leading-relaxed mb-4" >
  Halo, perkenalkan nama saya <span className="text-yellow-500 font-semibold">Muhammad Arya Ramadhan</span>. Saya adalah seorang junior developer dengan pengalaman di bidang front-end development dan UI/UX design selama 3 tahun saat bersekolah di SMKN 1 Ciomas. Saya berdomisili di Bogor, Jawa Barat.
</p>
<p className="text-gray-300 text-base font-normal md:text-lg leading-relaxed mb-4">
  Perjalanan saya dalam dunia pemrograman dimulai dari ketertarikan yang mendalam untuk memecahkan masalah-masalah kompleks dan mengubah ide-ide menjadi aplikasi web yang fungsional. Saya selalu berusaha untuk mempelajari teknologi-teknologi baru dan terus meningkatkan kemampuan saya.
</p>
<p className="text-gray-300 text-base font-normal md:text-lg leading-relaxed mb-6">
  Di luar pemrograman, saya memiliki hobi dan minat lain seperti menggambar yang menambah keseimbangan dalam hidup saya. Jangan ragu untuk menjelajahi portofolio saya atau hubungi saya jika ada peluang menarik untuk berkolaborasi!
</p>
</div>


          {/* Buttons for Contact or Resume */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              onClick={handleClick}
              className="bg-yellow-600 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out cursor-pointer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
