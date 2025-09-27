"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  company: string;
  html_url: string;
}

interface GitHubProfileCardProps {
  username: string;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const LoadingDots = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount(prev => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-6">
      {'.'.repeat(dotCount)}
    </span>
  );
};

const GitHubProfileCard: React.FC<GitHubProfileCardProps> = ({ username, onClose, buttonRef }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('User not found');
        
        const userData = await response.json();
        setUser(userData);

        try {
          const contributionResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
          if (contributionResponse.ok) {
            const contributionData = await contributionResponse.json();
            let total = 0;
            if (contributionData.total) {
              total = contributionData.total['2025'] || 0;
            } else if (contributionData.contributions) {
              const contributions2025 = contributionData.contributions.filter((contrib: any) => {
                const date = new Date(contrib.date);
                return date.getFullYear() === 2025;
              });
              total = contributions2025.reduce((sum: number, contrib: any) => {
                return sum + (contrib.contributionCount || contrib.count || 0);
              }, 0);
            }
            setTotalContributions(total);
          } else {
            setTotalContributions(0);
          }
        } catch (contributionError) {
          console.warn('Could not fetch contribution data:', contributionError);
          setTotalContributions(0);
        }
        
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current && 
        !cardRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
        }, 150); // Match the exit animation duration
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose, buttonRef]);

  const getCardPosition = () => {
    if (!buttonRef.current) return {};
    
    const buttonRect = buttonRef.current.getBoundingClientRect();
    return {
      position: 'fixed' as const,
      top: buttonRect.bottom + 12,
      right: window.innerWidth - buttonRect.right,
      zIndex: 50
    };
  };

  if (loading) {
    return (
      <motion.div
        ref={cardRef}
        style={getCardPosition()}
        className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-4 border border-neutral-200 dark:border-neutral-800"
        initial={{ opacity: 0, scale: 0.95, y: -10, width: "20rem" }}
        animate={{ opacity: 1, scale: 1, y: 0, width: "20rem" }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2 }}
        layout
      >
        <div className="flex items-center justify-center gap-3">
          <motion.span className="text-base text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            stalking please wait
            <LoadingDots />
          </motion.span>
        </div>
      </motion.div>
    );
  }

  if (error || !user) {
    return (
      <motion.div
        ref={cardRef}
        style={getCardPosition()}
        className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-4 border border-neutral-200 dark:border-neutral-800"
        initial={{ width: "20rem" }}
        animate={{ opacity: 1, scale: 1, y: 0, width: "20rem" }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        transition={{ duration: 0.2 }}
        layout
      >
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div className="text-red-500 text-xl mb-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            ⚠️
          </motion.div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{error || 'User not found'}</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      style={getCardPosition()}
      className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 max-w-lg overflow-hidden"
      initial={{ width: "20rem", height: "auto" }}
      animate={{ 
        opacity: isClosing ? 0 : 1, 
        scale: isClosing ? 0.95 : 1, 
        y: isClosing ? -10 : 0,
        width: "28rem"
      }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <div className="absolute inset-0 bg-white dark:bg-black/20"></div>
      
      <motion.div className="relative p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.div className="absolute top-4 right-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <Link href={user.html_url} target="_blank" aria-label="View on GitHub"
            className="p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors block">
            <ExternalLink className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          </Link>
        </motion.div>

        <div className="flex items-center gap-3 mb-3">
          <motion.img className="w-[56px] h-[56px] rounded-full ring-2 ring-white dark:ring-neutral-800 shadow-sm"
            src={user.avatar_url} 
            alt={`${user.name}'s avatar`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div className="flex-1 min-w-0"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.35 }}
          >
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white truncate">
              {user.name || user.login}
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400">@{user.login}</p>
          </motion.div>
        </div>

        {user.bio && (
          <motion.p 
            className="text-base text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.45 }}
          >
            {user.bio}
          </motion.p>
        )}

        <motion.div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-3 flex-wrap"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {user.company && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {user.company}
            </span>
          )}
          {user.location && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {user.location}
            </span>
          )}
          {user.blog && (
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline">
                {user.blog.replace(/^https?:\/\//, '')}
              </a>
            </span>
          )}
        </motion.div>

        <motion.div className="flex items-center gap-6 text-sm mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <div className="text-center">
            <span className="font-semibold text-neutral-900 dark:text-white">{user.public_repos}</span>
            <span className="text-neutral-500 ml-1">repos</span>
          </div>
          <div className="text-center">
            <span className="font-semibold text-neutral-900 dark:text-white">{user.followers}</span>
            <span className="text-neutral-500 ml-1">followers</span>
          </div>
          <div className="text-center">
            <span className="font-semibold text-neutral-900 dark:text-white">{user.following}</span>
            <span className="text-neutral-500 ml-1">following</span>
          </div>
        </motion.div>

        {totalContributions > 0 && (
          <motion.div 
            className="text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <motion.span 
              className="font-semibold text-neutral-900 dark:text-white"
              whileHover={{ scale: 1.05 }}
            >
              {totalContributions}
            </motion.span>
            <span className="text-neutral-500 ml-1">contributions in 2025</span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default GitHubProfileCard;