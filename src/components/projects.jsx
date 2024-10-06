import React, { useState, useMemo } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

import pklappdesign from "../image/Project/pklapp-bg.png"
import project1image1 from "../image/Project/pklapp-admin.png"
import project1image2 from "../image/Project/pklapp-siswa.png"
import project1image3 from "../image/Project/pklapp-pembimbing.png"
import laundrydesign from "../image/Project/laundry-bg.png"
import project2image1 from "../image/Project/homepagelaundry.png"
import project2image2 from "../image/Project/homepage-laundry1.png"
import project2image3 from "../image/Project/homepage-laundry2.png"
import project2image4 from "../image/Project/homepagelaundry3.png"
import kejaksaanapp from "../image/Project/kejaksaan-bg.png"
import project3image1 from "../image/Project/kejaksaan1.png"
import project3image2 from "../image/Project/kejaksaan2.png"
import project3image3 from "../image/Project/kejaksaan3.png"
import kantinapp from "../image/Project/kantinapp-bg.png"
import project6image1 from "../image/Project/kantinapp1.png"
import project6image2 from "../image/Project/kantinapp2.png"
import project6image3 from "../image/Project/kantinapp3.png"
import project6image4 from "../image/Project/kantinapp4.png"
import project6image5 from "../image/Project/kantinapp5.png"
import project6image6 from "../image/Project/kantinapp6.png"
import project6image7 from "../image/Project/kantinapp7.png"
import project6image8 from "../image/Project/kantinapp8.png"
import project6image9 from "../image/Project/kantinapp9.png"
import topupapp from "../image/Project/topup-bg.png"
import project10image1 from "../image/Project/topup1.png"
import project10image2 from "../image/Project/topup2.png"
import pklapp from "../image/Project/pklapp-bg1.png"
import project7image1 from "../image/Project/pklapp1.png"
import project7image2 from "../image/Project/pklapp2.png"
import project7image3 from "../image/Project/pklapp3.png"
import project7image4 from "../image/Project/pklapp4.png"
import project7image5 from "../image/Project/pklapp5.png"
import project7image6 from "../image/Project/pklapp6.png"
import project7image7 from "../image/Project/pklapp7.png"
import laundryapp from "../image/Project/laundryapp1.png"
import project8image2 from "../image/Project/laundryapp2.png"
import project8image3 from "../image/Project/laundryapp3.png"
import project8image4 from "../image/Project/laundryapp4.png"
import project8image5 from "../image/Project/laundryapp5.png"
import project8image6 from "../image/Project/laundryapp6.png"
import youtubeapp from "../image/Project/yt-bg.png"
import project4image1 from "../image/Project/yt1.png"
import project4image2 from "../image/Project/yt2.png"
import project4image3 from "../image/Project/yt3.png"
import project4image4 from "../image/Project/yt4.png"
import project4image5 from "../image/Project/yt5.png"
import bugattiapp from "../image/Project/bugatti-bg.png"
import project5image1 from "../image/Project/bugatti1.png"
import project5image2 from "../image/Project/bugatti2.png"
import project5image3 from "../image/Project/bugatti3.png"
import movieapp from "../image/Project/movie-bg.png"
import project9image1 from "../image/Project/movie1.png"
import project9image2 from "../image/Project/movie2.png"
import project9image3 from "../image/Project/movie3.png"
import spotifyapp from "../image/Project/spotify1.png"
import igapp from "../image/Project/ig-bg.png"
import project12image1 from "../image/Project/ig1.png"
import waapp from "../image/Project/wa-bg.png"
import project11image1 from "../image/Project/wa1.png"

const projects = [
  {
    id: 1,
    images: [pklappdesign, project1image1, project1image2, project1image3],
    title: 'Desain pengembangan aplikasi Praktik Kerja Lapangan (PKL) online',
    category: 'UI/UX',
    link: 'https://www.figma.com/design/nMoHqb70YVvZ3rSZexVMQg/Pengajuan-PKL?node-id=0-1&t=9rjaezhuR1ObzDyh-1',
    description: 'Desain pengembangan aplikasi Praktik Kerja Lapangan (PKL) online bertujuan untuk memfasilitasi pemantauan PKL secara efisien, mulai dari pendaftaran, penempatan siswa di perusahaan, hingga evaluasi hasil PKL. Proses desainnya berbasis hasil wawancara dan riset pengguna, untuk memastikan kebutuhan utama siswa, guru pembimbing, dan perusahaan mitra tercakup. Dengan menggunakan Figma, alur aplikasi dirancang untuk user-friendly, memudahkan akses dan interaksi antara semua pihak yang terlibat, serta memungkinkan laporan dan feedback yang lebih terstruktur dan transparan.'
  },
  {
    id: 2,
    images: [laundrydesign, project2image1, project2image2, project2image3, project2image4],
    title: 'Desain pengembangan aplikasi Laundry Online',
    category: 'UI/UX',
    link: 'https://www.figma.com/design/NGaie3alfVcnUKoqDAhnue/Aplikasi-laundry-mockup?node-id=214-3&t=85nRxnAI0cB19YvE-1',
    description: 'desain pengembangan aplikasi Laundry online dimulai dari ide iseng saya untuk mengisi waktu luang, namun mulai berkembang dengan riset sederhana melalui internet dan feedback dari tetangga sekitar terkait layanan laundry. Aplikasi ini dirancang untuk memudahkan pelanggan dalam memesan layanan laundry secara online, dari penjadwalan pengambilan hingga pengiriman kembali pakaian yang sudah dicuci. Proses desain dilakukan menggunakan Figma, dengan fokus pada antarmuka yang intuitif dan sederhana, mengimplementasikan masukan dari calon pengguna lokal untuk memastikan aplikasi ini sesuai dengan kebutuhan sehari-hari mereka.'
  },
  {
    id: 3,
    images: [kejaksaanapp, project3image1, project3image2, project3image3],
    title: 'Desain pegembangan aplikasi Kejaksaan Agung',
    category: 'UI/UX',
    link: 'https://www.figma.com/design/ecagqbne1GPRRWbZVM9VFN/Project-PKL?node-id=98-81&t=1t1zRLM7wMorJzeD-1',
    description: 'Desain pengembangan aplikasi Kejaksaan Agung merupakan proyek nyata yang dikerjakan oleh tim kami dalam waktu yang cukup singkat. Aplikasi ini bertujuan untuk mempermudah akses informasi dan layanan publik yang disediakan oleh Kejaksaan Agung. Dengan antarmuka yang sederhana dan mudah dipahami, pengguna dapat dengan cepat menemukan informasi yang dibutuhkan, melakukan pengaduan, dan mengakses layanan terkait. Meskipun kami menghadapi deadline yang ketat, kerja sama yang baik dalam tim memungkinkan kami untuk menyelesaikan proyek ini tepat waktu dan sesuai dengan harapan klien.'
  },
  {
    id: 7,
    images: [youtubeapp, project4image1, project4image2, project4image3, project4image4, project4image5],
    title: 'Aplikasi Website Youtube clone',
    category: 'Web Development',
    link: 'https://arsyharif006.github.io/YoutubeClone-Arsyha/',
    description: 'Desain aplikasi website YouTube clone ini dimulai sebagai upaya untuk menguji kemampuan saya sekaligus mengisi waktu luang. Dalam prosesnya, saya belajar banyak tentang penggunaan API dari penyedia layanan. Teknologi yang saya gunakan untuk pengembangan aplikasi ini meliputi React Native untuk membangun antarmuka pengguna yang responsif, Tailwind CSS untuk styling yang modern dan efisien, serta Rapid API untuk mengintegrasikan berbagai sumber data. Aplikasi ini bertujuan untuk memberikan pengalaman menonton video yang serupa dengan YouTube, sambil memperdalam pemahaman saya tentang pengembangan web.'
  },
  {
    id: 9,
    images: [spotifyapp],
    title: 'Website Spotify Clone',
    category: 'Web Development',
    link : 'https://arsyharif006.github.io/SportifyClone-Arsyha/',
    description: 'Website Spotify clone ini saya buat sebagai sarana untuk meluangkan waktu dan mengasah kemampuan styling saya. Dalam pengembangan aplikasi ini, saya menggunakan teknologi React.js untuk membangun antarmuka yang interaktif dan responsif, serta Tailwind CSS untuk styling yang modern. Tujuan dari proyek ini adalah untuk menciptakan pengalaman mendengarkan musik yang mirip dengan Spotify, sekaligus meningkatkan keterampilan saya dalam pengembangan web.'
  },
  {
    id: 10,
    images: [bugattiapp, project5image1, project5image2, project5image3],
    title: 'Website LandingPage Showroom Bugatti',
    category: 'Web Development',
    link : 'https://arsyharif006.github.io/bugatti-Arsyha/',
    description: 'Website landing page untuk showroom Bugatti ini terinspirasi oleh desain menarik dari situs resmi Bugatti yang saya lihat. Dengan semangat untuk menciptakan sesuatu yang serupa, saya berinisiatif untuk membuatnya sendiri. Dalam pengembangan proyek ini, saya menggunakan teknologi HTML, CSS, dan JavaScript untuk menghasilkan tampilan yang elegan dan interaktif. Tujuan dari landing page ini adalah untuk menampilkan keindahan dan kemewahan mobil Bugatti, serta memberikan pengalaman pengguna yang memukau.'
  },
  {
    id: 4,
    images: [kantinapp, project6image1, project6image2, project6image3, project6image4,project6image5,project6image6,project6image7,project6image8,project6image9],
    title: 'Aplikasi Website Kantin sekolah SMKN 1 Ciomas',
    category: 'Web Development',
    description: 'Aplikasi website kantin untuk SMKN 1 Ciomas ini saya buat sebagai bagian dari ujian wajib uji kompetensi yang harus dilalui untuk naik kelas. Dalam prosesnya, saya melakukan riset mendalam dengan beberapa siswa dan pedagang kantin untuk memahami kebutuhan dan preferensi mereka. Teknologi yang saya gunakan dalam pengembangan aplikasi ini adalah PHP untuk pengolahan data dan MySQL sebagai basis data. Tujuan dari aplikasi ini adalah untuk memudahkan siswa dalam memesan makanan dan minuman secara online, sekaligus meningkatkan efisiensi operasional kantin.'
  },
  {
    id: 5,
    images: [pklapp, project7image1, project7image2, project7image3,project7image4,project7image5,project7image6,project7image7],
    title: 'Aplikasi Website Praktek Kerja Lapangan (PKL) SMKN 1 Ciomas',
    category: 'Web Development',
    description: 'Aplikasi website untuk Praktik Kerja Lapangan (PKL) di SMKN 1 Ciomas ini saya buat sebagai bagian dari ujian kompetensi yang harus dilalui. Proyek ini merupakan kelanjutan dari pengembangan desain yang sebelumnya telah saya lakukan. Dalam pengembangan aplikasi ini, saya menggunakan teknologi React.js untuk antarmuka pengguna yang responsif, Laravel sebagai framework backend, Tailwind CSS untuk styling yang modern, dan MySQL sebagai basis data. Tujuan dari aplikasi ini adalah untuk mempermudah siswa dalam mengelola dan memantau kegiatan PKL mereka, serta meningkatkan komunikasi antara siswa, guru, dan perusahaan mitra.'
  },
  {
    id: 6,
    images: [laundryapp, project8image2, project8image3,project8image4,project8image5,project8image6],
    title: 'Aplikasi Website Laundry Online',
    category: 'Web Development',
    description: 'Aplikasi website laundry online ini adalah kelanjutan dari desain yang sebelumnya saya buat, dan saat ini sedang dalam proses pengembangan. Dalam pengembangan aplikasi ini, saya menggunakan teknologi React.js untuk menciptakan antarmuka yang interaktif dan responsif, serta Tailwind CSS untuk styling yang modern dan efisien. Tujuan dari aplikasi ini adalah untuk memudahkan pelanggan dalam memesan layanan laundry secara online, serta meningkatkan efisiensi operasional bagi penyedia layanan laundry. Meskipun masih dalam tahap pengembangan, saya berharap aplikasi ini dapat memenuhi kebutuhan pengguna dengan baik.'
  },
  {
    id: 8,
    images: [movieapp, project9image1, project9image2, project9image3],
    title: 'Website Landing Page nonton anime',
    category: 'Web Development',
    description: 'Website landing page untuk nonton anime ini saya buat untuk meluangkan waktu saja, dan ada kemungkinan untuk mengembangkannya lebih lanjut. Dalam pengembangan proyek ini, saya menggunakan HTML, CSS, dan JavaScript untuk menciptakan tampilan yang menarik dan interaktif.'
  },
  {
    id: 11,
    images: [topupapp, project10image1, project10image2],
    title: 'Website Topup game',
    category: 'Web Development',
    description: 'Website top-up game ini adalah proyek yang selalu ingin saya kembangkan. Meskipun ada beberapa hambatan yang membuat saya belum bisa melanjutkannya, saya berencana untuk meneruskan proyek di lain waktu. Dalam pengembangan website ini, saya menggunakan HTML, CSS, dan JavaScript untuk menciptakan antarmuka yang menarik. Tujuan dari website ini adalah untuk memudahkan dalam melakukan top-up game secara cepat dan aman.'
  },
  {
    id: 12,
    images: [waapp, project11image1],
    title: 'Website Landing Page Whatsapp Clone',
    category: 'Web Development',
    description: 'Website WhatsApp clone ini saya buat untuk meluangkan waktu dan mengasah kemampuan saya dalam styling. Dalam pengembangan proyek ini, saya menggunakan HTML, CSS, dan JavaScript untuk menciptakan antarmuka yang menarik dan interaktif. Tujuan dari proyek ini adalah untuk memberikan tampilan mirip dengan WhatsApp, sambil meningkatkan keterampilan saya dalam pengembangan web.'
  },
  {
    id: 13,
    images: [igapp, project12image1],
    title: 'Website Landing Page Instagram Clone',
    category: 'Web Development',
    description: 'Website Instagram clone ini saya kembangkan sebagai proyek untuk mengisi waktu luang sekaligus meningkatkan kemampuan styling saya. Dalam proses pengembangan, saya memanfaatkan HTML, CSS, dan JavaScript untuk menciptakan antarmuka yang menarik. Tujuan dari proyek ini adalah untuk meniru tampiln yang serupa dengan Instagram, sambil meningkatkan keterampilan saya dalam pengembangan web.'
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX'];
const projectsPerPage = 6;

const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    return filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="projects" className="py-12 md:py-16 px-8 md:px-16 bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 relative" data-aos="fade-up">
        Projects
        <div className='h-2 w-[10vh] md:w-[19vh] bg-yellow-600 rounded-lg mt-2'></div>
      </h2>
      <div className="flex justify-center mb-8" data-aos="fade-up">
        <div className="inline-flex bg-gray-800 rounded-full p-1 md:text-lg text-[12px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category 
                  ? 'bg-yellow-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {currentProjects.map((project) => (
          <div 
            key={project.id} 
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openModal(project)}
          >
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.category}</h3>
              </div>
              <div className="flex justify-between items-center text-white">
                <span className="mr-2">{project.title}</span>
                <div className='rounded-full px-1 py-1 bg-white'>
                  <FiArrowRight className="text-lg text-black" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav className="inline-flex rounded-md shadow">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-l-md bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
          >
            <FiChevronLeft />
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              className={`px-4 py-2 ${
                currentPage === page + 1
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {page + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-r-md bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
          >
            <FiChevronRight />
          </button>
        </nav>
      </div>

      {/* Modal */}
      {selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-4 md:p-8 max-w-md md:max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold">{selectedProject.title}</h3>
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
          <FiX size={24} />
        </button>
      </div>
      <div className="relative mb-4">
        <img 
          src={selectedProject.images[currentImageIndex]} 
          alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
          className="w-full h-48 md:h-full object-cover rounded-lg"
        />
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <FiChevronLeft size={24} />
        </button>
        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <FiChevronRight size={24} />
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 px-2 py-1 rounded">
          {currentImageIndex + 1} / {selectedProject.images.length}
        </div>
      </div>
      <p className="text-gray-600 mb-4">{selectedProject.description}</p>
      <a 
        href={selectedProject.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:underline"
      >
        {selectedProject.link}
      </a>
    </div>
  </div>
)}

    </section>
  );
};

export default ProjectSection;