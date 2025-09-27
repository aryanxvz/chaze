"use client"
import React, { useState, useRef } from 'react';
import GitHubProfileCard from './github-profile';
import GitHubIcon from '../icons/github-icon';

interface GitHubButtonProps {
  username: string;
}

const GitHubButton: React.FC<GitHubButtonProps> = ({ username }) => {
  const [showCard, setShowCard] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCard(true);
  };

  const getGradientClasses = () => {
    const baseClasses = "absolute -inset-0.5 w-8 h-8 rounded-full opacity-80 transition-all duration-300";
    const gradientClasses = "bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-600 dark:via-neutral-700 dark:to-neutral-600";
    return `${baseClasses} ${gradientClasses}`;
  };

  return (
    <>
      <div className="flex items-center justify-center ml-4">
        <div className="relative p-[2px] border border-transparent rounded-full hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300">
          <div className="relative">
            <div className={getGradientClasses()} />
            <button 
              ref={buttonRef} 
              onClick={handleClick} 
              aria-label="View GitHub profile"
              className="relative w-7 h-7 rounded-full shadow-lg flex items-center justify-center overflow-hidden z-10 cursor-pointer transition-all duration-300 bg-white dark:bg-neutral-950"
            >
              <div className="absolute inset-1 rounded-full transition-all duration-300" />
              <div className="relative z-10">
                <GitHubIcon className="size-[16px] text-black dark:text-white transition-colors duration-100" />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {showCard && (
        <GitHubProfileCard 
          username={username} 
          onClose={() => setShowCard(false)}
          buttonRef={buttonRef}
        />
      )}
    </>
  );
};

export default GitHubButton;