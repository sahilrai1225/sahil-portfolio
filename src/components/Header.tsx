import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = ({ recruiterMode, setRecruiterMode }: { recruiterMode: boolean, setRecruiterMode: (v: boolean) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 font-semibold text-lg hover:opacity-70 transition-opacity cursor-pointer text-ink"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold italic shadow-lg shadow-accent/20">SR</div>
          <div className="flex flex-col">
            <span className="tracking-tight uppercase text-sm font-extrabold leading-none">Sahil Rai</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">/ AI-ML Engineer</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex bg-gray-100 p-1 rounded-full items-center">
            <button 
              onClick={() => setRecruiterMode(false)}
              className={cn(
                "text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full transition-all",
                !recruiterMode ? "bg-white text-accent shadow-sm" : "bg-transparent text-gray-400 hover:text-gray-600"
              )}
            >
              Standard
            </button>
            <button 
              onClick={() => setRecruiterMode(true)}
              className={cn(
                "text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full transition-all",
                recruiterMode ? "bg-white text-accent shadow-sm" : "bg-transparent text-gray-400 hover:text-gray-600"
              )}
            >
              Recruiter Mode
            </button>
          </div>
          <a href="#projects" className="text-sm font-semibold text-gray-600 hover:text-accent transition-colors">Case Studies</a>
          <a href="#blog" className="text-sm font-semibold text-gray-600 hover:text-accent transition-colors">Notes</a>
          <div className="flex items-center gap-4 border-l border-gray-200 ml-4 pl-4">
            <a href={`mailto:${portfolioData.personal.email}`} className="bg-accent text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-transform">Contact</a>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4"
        >
           <button 
            onClick={() => { setRecruiterMode(!recruiterMode); setIsMenuOpen(false); }}
            className={cn(
              "text-xs font-bold uppercase tracking-widest px-3 py-2 rounded-full transition-all border text-center",
              recruiterMode ? "bg-black text-white border-black" : "bg-transparent text-gray-500 border-gray-200"
            )}
          >
            {recruiterMode ? "Switch to Product Mode" : "Switch to Recruiter Mode"}
          </button>
          <a href="#projects" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#blog" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Research/Blog</a>
        </motion.div>
      )}
    </header>
  );
};
