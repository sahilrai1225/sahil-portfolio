/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillVisualizer } from './components/SkillVisualizer';
import { ProjectSection } from './components/ProjectSection';
import { BlogSystem } from './components/BlogSystem';
import { Contact } from './components/Contact';
import { NeuralGrid } from './components/NeuralGrid';
import { RecruiterMode } from './components/RecruiterMode';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  return (
    <div className="relative font-sans text-slate-900 bg-white selection:bg-black selection:text-white">
      <NeuralGrid />
      <Header recruiterMode={recruiterMode} setRecruiterMode={setRecruiterMode} />
      
      <main className="mx-auto max-w-7xl px-6">
        <AnimatePresence mode="wait">
          {recruiterMode ? (
            <motion.div
              key="recruiter"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <RecruiterMode />
            </motion.div>
          ) : (
            <motion.div
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <div className="space-y-32">
                <About />
                <ExperienceSection />
                <SkillVisualizer />
                <ProjectSection />
                <BlogSystem />
                <Contact />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Subtle Scroll Indicator */}
      {!recruiterMode && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-gray-200" />
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">Scroll Exploration</span>
        </motion.div>
      )}
    </div>
  );
}
