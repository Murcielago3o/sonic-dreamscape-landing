
import React, { useState } from 'react';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import WorkSection from '../components/portfolio/WorkSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ContactSection from '../components/portfolio/ContactSection';
import ThemeToggle from '../components/portfolio/ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Portfolio = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-background text-foreground' : 'bg-white text-gray-900'}`}>
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
