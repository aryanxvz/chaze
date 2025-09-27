"use client"
import React from 'react';
import GitHubButton from '../github/github-button';
import ThemeToggle from '../theme-toggle';

const Logo = () => (
  <div className="text-2xl font-bold">aryan</div>
);

const Navigation = () => (
  <span className="text-xl font-semibold">components</span>
);

export default function Navbar() {
  return (
    <nav className="max-w-4xl flex items-center justify-between mx-auto mt-4 px-2 text-black dark:text-white">
      <Logo />
      <div className="flex items-center gap-2">
        <Navigation />
        <GitHubButton username="aryanxvz" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
