// src/components/PixelBackground.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PixelBackground = () => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none opacity-10 z-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, transparent 90%, #0572FF 90%),
          linear-gradient(to bottom, transparent 90%, #0572FF 90%)
        `,
        backgroundSize: '20px 20px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '40px 40px'],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default PixelBackground;