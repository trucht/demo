'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Position = 'top' | 'right' | 'bottom' | 'left';

interface PositionConfig {
  rotation: number;
  x: number;
  y: number;
}

const positions: Record<Position, PositionConfig> = {
  top: { rotation: 0, x: 0, y: -260 },
  right: { rotation: 90, x: 260, y: 0 },
  bottom: { rotation: 180, x: 0, y: 260 },
  left: { rotation: 270, x: -260, y: 0 }
};

const getTransformProperties = (position: Position) => {
  const radius = 318; // Half of 636px (dotted circle diameter)
  const angle = {
    top: 270, // Adjusted angles to match the circular path
    right: 0,
    bottom: 90,
    left: 180
  }[position];
  
  // Calculate position on the larger circle path
  const radian = (angle * Math.PI) / 180;
  const x = radius * Math.cos(radian);
  const y = radius * Math.sin(radian);
  
  return {
    '--x': `${x}px`,
    '--y': `${y}px`,
    '--rotation': `${(angle + 90)}deg`, // Adjust rotation to point outward
  } as React.CSSProperties;
};

const MultiModalitiesSection = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>('top');
  const [prevPosition, setPrevPosition] = useState<Position>('top');

  // Initial render - set arrow to top position
  useEffect(() => {
    setCurrentPosition('top');
    setPrevPosition('top');
  }, []);

  const handlePositionChange = (newPosition: Position) => {
    if (newPosition !== currentPosition) {  // Only update if moving to a new position
      setPrevPosition(currentPosition);
      setCurrentPosition(newPosition);
    }
  };

  const getPositionVariants = (position: Position) => {
    const radius = 260;
    return {
      x: positions[position].x,
      y: positions[position].y,
      rotate: positions[position].rotation,
    };
  };

  return (
    <section className="px-6 pt-16 bg-white pb-12">
      <div className="text-center mb-12 flex flex-col justify-center">
        <h2 className="text-5xl text-[#1e1e1e] mb-20">Multi-modalities</h2>
        <div className="relative flex items-center justify-center h-[636px] w-[636px] mx-auto">
          {/* Central Circle */}
          <div className="relative flex items-center justify-center w-[444px] h-[444px] rounded-full bg-gradient-to-r from-blue-900 to-teal-500 text-white text-center">
            <p className="text-lg font-bold">
              4000 single-cell <br /> RNA-seq datasets
            </p>
          </div>
          {/* Dotted Circle */}
          <div className="absolute h-[636px] w-[636px] rounded-full border border-dotted border-[#003A7F]"></div>

          {/* Replace the TriangleIcon div with this */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(0, -260px) rotate(0deg)`,
              animation: currentPosition !== prevPosition 
                ? `move-${prevPosition}-to-${currentPosition} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`
                : 'none'
            }}
          >
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.37158 0.499998C8.75648 -0.166669 9.71873 -0.166667 10.1036 0.5L17.6092 13.5C17.9941 14.1667 17.513 15 16.7432 15H1.73205C0.962248 15 0.481125 14.1667 0.866025 13.5L8.37158 0.499998Z" fill="#045888" />
            </svg>
          </div>

          {/* Top Circle and Label */}
          <div 
            className="absolute top-[-50px] flex flex-col items-center"
            onClick={() => handlePositionChange('top')}
            onMouseEnter={() => handlePositionChange('top')}
          >
            <p className="mt-2 text-sm text-[#1e1e1e]">Spatial proteomics</p>
            <div className={`w-12 h-12 rounded-full cursor-pointer ${
              currentPosition === 'top' 
                ? 'bg-gradient-to-r from-blue-900 to-teal-500' 
                : 'bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500'
            }`}></div>
          </div>

          {/* Right Circle and Label */}
          <div 
            className="absolute right-[-198px] top-1/2 transform -translate-y-1/2 flex flex-row items-center gap-2"
            onClick={() => handlePositionChange('right')}
            onMouseEnter={() => handlePositionChange('right')}
          >
            <div className={`w-12 h-12 rounded-full cursor-pointer ${
              currentPosition === 'right' 
                ? 'bg-gradient-to-r from-blue-900 to-teal-500' 
                : 'bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500'
            }`}></div>
            <p className="mt-2 text-sm text-[#1e1e1e]">Single-cell RNA sequencing</p>
          </div>

          {/* Bottom Circle and Label */}
          <div 
            className="absolute bottom-[-50px] flex flex-col items-center"
            onClick={() => handlePositionChange('bottom')}
            onMouseEnter={() => handlePositionChange('bottom')}
          >
            <div className={`w-12 h-12 rounded-full cursor-pointer ${
              currentPosition === 'bottom' 
                ? 'bg-gradient-to-r from-blue-900 to-teal-500' 
                : 'bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500'
            }`}></div>
            <p className="mt-2 text-sm text-[#1e1e1e]">Single-cell spatial transcriptomics</p>
          </div>

          {/* Left Circle and Label */}
          <div 
            className="absolute left-[-198px] top-1/2 transform -translate-y-1/2 flex flex-row items-center gap-2"
            onClick={() => handlePositionChange('left')}
            onMouseEnter={() => handlePositionChange('left')}
          >
            <p className="mt-2 text-sm text-[#1e1e1e]">Bulk spatial transcriptomics</p>
            <div className={`w-12 h-12 rounded-full cursor-pointer ${
              currentPosition === 'left' 
                ? 'bg-gradient-to-r from-blue-900 to-teal-500' 
                : 'bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500'
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiModalitiesSection;