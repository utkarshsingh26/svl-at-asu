import { motion } from 'framer-motion';
import React from 'react';

const NightDesertGraphThemeWithPapers = ({ children }: { children: React.ReactNode }) => {
  // Generate an array of random positions for tumbleweeds
  const pieCharts = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    x: Math.random() * 100, // random start position
    delay: Math.random() * 10, // random delay for each pie chart
    speed: Math.random() * 20 + 20, // varying speed
    size: Math.random() * 40 + 30, // varying size
  }));

  // Generate random positions for cacti
  const cacti = Array.from({ length: 4 }, (_, index) => ({
    id: index,
    left: Math.random() * 80 + 10, // Position cacti scattered across the ground
    height: 100 + Math.random() * 100, // Varying heights
  }));

  // Generate white lines for wind animation
  const windLines = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    delay: Math.random() * 5,
    top: Math.random() * 60 + 20, // Vertical position between 20% and 80%
  }));

  // Generate flying papers
  const papers = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    delay: Math.random() * 5,
    size: Math.random() * 40 + 20, // Random size for papers
    top: Math.random() * 60 + 20, // Random top position
  }));

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-indigo-900 via-gray-800 to-black">
      {/* Stars in the night sky */}
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Moon */}
      <div className="absolute top-10 right-1/4 w-[100px] h-[100px] bg-white rounded-full opacity-80 shadow-xl" />

      {/* Flat desert floor */}
      <svg className="absolute bottom-0 left-0 w-full h-3/4" viewBox="0 0 100 25" preserveAspectRatio="none">
        <path
          d="M0,20 Q20,15 40,20 T80,15 Q90,18 100,20 L100,25 L0,25 Z"
          fill="#6D4C41"
        />
      </svg>

      {/* Cacti as silhouettes */}
      {cacti.map((cactus) => (
        <div
          key={cactus.id}
          className="absolute left-0"
          style={{
            bottom: '12.5%',
            left: `${cactus.left}%`,
            width: '30px',
          }}
        >
          <div
            className="bg-green-900 rounded-t-lg"
            style={{
              height: `${cactus.height * 0.5}px`,
            }}
          />
          <div
            className="bg-green-700 rounded-b-lg"
            style={{
              height: `${cactus.height * 0.5}px`,
            }}
          />

          {[...Array(2)].map((_, branchIndex) => (
            <div
              key={branchIndex}
              className="absolute bg-green-800 rounded-lg"
              style={{
                width: '10px',
                height: `${cactus.height * 0.2}px`,
                top: `${cactus.height * 0.3}px`,
                left: branchIndex === 0 ? '-15px' : '35px',
                transform: `rotate(${branchIndex === 0 ? '-20deg' : '20deg'})`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Animated Tumbleweeds */}
      {pieCharts.map((chart) => (
        <motion.div
          key={chart.id}
          className="absolute rounded-full border-[16px] border-t-gray-500 border-l-transparent border-r-gray-400 border-b-gray-600"
          style={{
            width: `${chart.size}px`,
            height: `${chart.size}px`,
            bottom: '10%',
            left: `${chart.x}vw`,
          }}
          animate={{
            x: ['0vw', '100vw'],
            rotate: [0, 360],
          }}
          transition={{
            duration: chart.speed,
            delay: chart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Animated Wind Lines */}
      {windLines.map((wind) => (
        <motion.div
          key={wind.id}
          className="absolute h-[2px] bg-gray-300 opacity-50"
          style={{
            width: '150px',
            top: `${wind.top}%`,
            left: '-10%',
          }}
          animate={{
            x: ['-10%', '40%', '110%'],
            y: ['0%', '5%', '0%'],
          }}
          transition={{
            duration: 8,
            delay: wind.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Flying Papers */}
      {papers.map((paper) => (
        <motion.div
          key={paper.id}
          className="absolute bg-gray-400 shadow-lg opacity-80"
          style={{
            width: `${paper.size + 10}px`,
            height: `${(paper.size + 10) / 1.5}px`,
            top: `${paper.top}%`,
            left: '-10%',
            borderRadius: '4px',
          }}
          animate={{
            x: ['-10%', '510%'],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            delay: paper.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Children Content */}
      <div className="relative z-10 flex flex-col min-h-screen text-white">
        {children}
      </div>
    </div>
  );
};

export default NightDesertGraphThemeWithPapers;
