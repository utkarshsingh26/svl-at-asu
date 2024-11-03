import { motion } from 'framer-motion';
import React from 'react';

const DesertGraphThemeWithPapers = ({ children }: { children: React.ReactNode }) => {
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
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-orange-300 via-yellow-200 to-orange-100">
      {/* Sun as Simplified Sunburst Chart */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="relative w-[150px] h-[150px] rounded-full bg-yellow-400">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-yellow-500"
              style={{
                width: '150px',
                height: '150px',
                transformOrigin: 'center',
                transform: `rotate(${index * 30}deg)`,
                clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
              }}
            />
          ))}
          <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 rounded-full opacity-80" />
        </div>
      </div>

      {/* Flat desert floor as Steam Graph */}
      <svg className="absolute bottom-0 left-0 w-full h-3/4" viewBox="0 0 100 25" preserveAspectRatio="none">
        <path
          d="M0,20 Q20,15 40,20 T80,15 Q90,18 100,20 L100,25 L0,25 Z"
          fill="#D4A373"
        />
      </svg>

      {/* Cacti as Stacked Bar Graphs with Branches */}
      {cacti.map((cactus) => (
        <div
          key={cactus.id}
          className="absolute left-0"
          style={{
            bottom: '12.5%', // Position on the ground
            left: `${cactus.left}%`, // Scatter across the width
            width: '30px',
          }}
        >
          {/* Main body sections */}
          <div
            className="bg-green-500 rounded-t-lg"
            style={{
              height: `${cactus.height * 0.5}px`, // Bottom half height
            }}
          />
          <div
            className="bg-green-700 rounded-b-lg"
            style={{
              height: `${cactus.height * 0.5}px`, // Top half height
            }}
          />

          {/* Branches as smaller bar graphs */}
          {[...Array(2)].map((_, branchIndex) => (
            <div
              key={branchIndex}
              className="absolute bg-green-600 rounded-lg"
              style={{
                width: '10px',
                height: `${cactus.height * 0.2}px`, // Smaller branches
                top: `${cactus.height * 0.3}px`, // Position along the main body
                left: branchIndex === 0 ? '-15px' : '35px', // Position to the left or right
                transform: `rotate(${branchIndex === 0 ? '-20deg' : '20deg'})`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Animated Tumbleweeds as Pie Charts */}
      {pieCharts.map((chart) => (
        <motion.div
          key={chart.id}
          className="absolute rounded-full border-[16px] border-t-orange-600 border-l-transparent border-r-orange-200 border-b-orange-400"
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

      {/* Animated Wind Lines with Circling Effect */}
      {windLines.map((wind) => (
        <motion.div
          key={wind.id}
          className="absolute h-[3px] bg-white opacity-70"
          style={{
            width: '150px',
            top: `${wind.top}%`,
            left: '-10%',
          }}
          animate={{
            x: ['-10%', '40%', '110%'],
            y: ['0%', '10%', '0%'],
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
          className="absolute bg-white shadow-lg opacity-90"
          style={{
            width: `${paper.size + 10}px`,
            height: `${(paper.size + 10) / 1.5}px`,
            top: `${paper.top}%`,
            left: '-10%',
            borderRadius: '4px',
          }}
          animate={{
            x: ['-10%', '1100%'],
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
      <div className="relative z-10 flex flex-col min-h-screen text-slate-900">
        {children}
      </div>
    </div>
  );
};

export default DesertGraphThemeWithPapers;
