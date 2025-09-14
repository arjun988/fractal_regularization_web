import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { Analytics } from '@vercel/analytics/react';
import type { ModalState } from './types';
import Navigation from './components/Navigation';
import GraphModals from './components/GraphModals';
import {
  HeroSection,
  TheorySection,
  MathematicsSection,
  ResultsSection,
  InstallationSection,
  FooterSection,
  ResearchPaperSection
} from './components/sections';

const FractalRegularizationTerminal: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [modalState, setModalState] = useState<ModalState>({
    trainingLoss: false,
    validationLoss: false,
    performanceMetrics: false
  });

  useEffect(() => {
    setIsLoaded(true);
    
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all sections
    const sections = ['theory', 'mathematics', 'results', 'install'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-green-400 font-mono overflow-x-hidden pb-20 lg:pb-0">
      {/* Enhanced Matrix-style background */}
      <div className="fixed inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        {/* Additional animated grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Terminal */}
      <HeroSection isLoaded={isLoaded} />

      {/* Theory Section */}
      <TheorySection isVisible={visibleSections.has('theory')} />

      {/* Mathematics Section */}
      <MathematicsSection isVisible={visibleSections.has('mathematics')} />

      {/* Results Section */}
      <ResultsSection 
        isVisible={visibleSections.has('results')} 
        modalState={modalState}
        setModalState={setModalState}
      />

      {/* Installation Section */}
      <InstallationSection isVisible={visibleSections.has('install')} />

      {/* Research Paper Section */}
      <ResearchPaperSection />

      {/* Footer */}
      <FooterSection />

      {/* Graph Modals */}
      <GraphModals modalState={modalState} setModalState={setModalState} />
      
      {/* Analytics */}
      <Analytics />
    </div>
  );
};

export default FractalRegularizationTerminal;