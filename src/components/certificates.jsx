import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Import images from local files
import certificate1 from '../image/serti1.png';
import certificate2 from '../image/serti2.png';
import certificate3 from '../image/serti3.png';
import certificate4 from '../image/serti4.png';
import certificate5 from '../image/serti5.png';
import certificate6 from '../image/serti6.png';
import certificate7 from '../image/serti7.png';
import certificate8 from '../image/serti8.png';
import certificate9 from '../image/serti10.png';
import certificate10 from '../image/serti9.png';
import certificate11 from '../image/serti11.png';
import certificate12 from '../image/serti12.png';
import certificate13 from '../image/serti13.png';
import certificate14 from '../image/serti14.png';
import certificate15 from '../image/serti15.png';
import certificate16 from '../image/serti16.png';

const certificates = [
  {
    image: certificate1,
    title: "Belajar Dasar Google Cloud (Dicoding)",
  },
  {
    image: certificate2,
    title: "Pengenalan Logika Pemograman (Dicoding)",
  },
  {
    image: certificate3,
    title: "Dasar Pemograman Untuk Memulai Menjadi Pengembang Software (Dicoding)",
  },
  {
    image: certificate4,
    title: "Belajar Pemograman Javascript (Dicoding)",
  },
  {
    image: certificate5,
    title: "Belajar Membuat FrontEnd (Dicoding)",
  },
  {
    image: certificate6,
    title: "Belajar UX Design (Dicoding)",
  },
  {
    image: certificate7,
    title: "Belajar Pemograman Web (Dicoding)",
  },
  {
    image: certificate8,
    title: "Program Seminar Literasi Digital (Kominfo)",
  },
  {
    image: certificate9,
    title: "Program Pelatihan CSS Magician Series (SMKCODING)",
  },
  {
    image: certificate10,
    title: "Peraih Medali Emas Bidang Informatika (Pon Indonesia)",
  },
  {
    image: certificate11,
    title: "Peraih Medali Emas Bidang Informatika (Puskantara)",
  },
  {
    image: certificate12,
    title: "Peraih Medali Emas Bidang Informatika (Pon Indonesia)",
  },
  {
    image: certificate13,
    title: "Peraih Medali Emas Bidang Teknik Jaringan Komputer dan Telekomunikasi (Pon Indonesia)",
  },
  {
    image: certificate14,
    title: "Peraih Medali Emas Bidang Pegembangan Perangkat Lunak Dan Gim (Pon Indonesia)",
  },
  {
    image: certificate15,
    title: "Peraih Medali Emas Bidang Bahasa Inggris (Pon Indonesia)",
  },
  {
    image: certificate16,
    title: "Peraih Medali Perak Bidang Bahasa Inggris (Prestige)",
  },
];

const Modal = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
           X
          </button>
        </div>
        <div className="p-4">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

const CertificateSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleSlideChange = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certificates"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-24 px-9 md:px-16"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">
        Certificates
        <div className='h-2 w-[15vh] md:w-40 bg-yellow-600 rounded-lg mt-2 mx-auto' data-aos="fade-up" data-aos-delay="200"></div>
      </h2>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        navigation={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col h-full">
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="object-cover w-full h-48 md:h-56 transition-transform duration-300 hover:scale-110 "
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 line-clamp-1 hover:line-clamp-none transition-all duration-300">
                  {certificate.title}
                </h3>
                <button 
                  onClick={() => openModal(certificate)}
                  className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-10">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full mx-1.5 md:mx-2 transition-all duration-300 ${
              activeIndex === index ? 'bg-yellow-500 scale-110 md:scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
      <Modal 
        isOpen={modalOpen}
        onClose={closeModal}
        image={selectedCertificate?.image}
        title={selectedCertificate?.title}
      />
    </section>
  );
};

export default CertificateSection;
