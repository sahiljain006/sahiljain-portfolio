import React, { useEffect, useState, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { AuroraBackground } from './components/AuroraBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechMarquee } from './components/TechMarquee';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { GoToTopButton } from './components/GoToTopButton';
import { CertificationItem } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxType, setLightboxType] = useState<'cert' | 'resume' | null>(null);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  }, []);

  // Section observer to update active navigation tab
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'resume', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // IntersectionObserver for reveal elements
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleOpenCert = (cert: CertificationItem) => {
    setSelectedCert(cert);
    setLightboxType('cert');
    setLightboxOpen(true);
  };

  const handleOpenResume = () => {
    setSelectedCert(null);
    setLightboxType('resume');
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedCert(null);
    setLightboxType(null);
  };

  return (
    <>
      {/* Background visual components */}
      <AuroraBackground />
      <CustomCursor />
      <ScrollProgressBar />
      <Preloader />
      <GoToTopButton />

      {/* Floating Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <main id="page-container">
        <div className="page-enter">
          <HeroSection onNavigate={scrollToSection} />
          <TechMarquee />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection onSelectCert={handleOpenCert} />
          <AchievementsSection />
          <ResumeSection onOpenPreview={handleOpenResume} />
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Lightbox / Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        type={lightboxType}
        certData={selectedCert}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </>
  );
};
