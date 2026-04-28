import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = ({ recruiterMode, setRecruiterMode }: { recruiterMode: boolean, setRecruiterMode: (v: boolean) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-warm/60 backdrop-blur-xl border-b border-accent-soft/20">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 font-semibold text-lg hover:opacity-70 transition-opacity cursor-pointer text-ink"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-bg-warm font-black italic shadow-lg shadow-accent/20">S</div>
          <div className="flex flex-col">
            <span className="tracking-tighter text-base font-black leading-none">SAHIL RAI</span>
            <span className="text-[10px] font-extrabold text-accent uppercase tracking-widest mt-1">{portfolioData.personal.title}</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex bg-accent/5 p-1 rounded-full items-center border border-accent/10">
            <button 
              onClick={() => setRecruiterMode(false)}
              className={cn(
                "text-[9px] font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-full transition-all",
                !recruiterMode ? "bg-white text-ink shadow-sm" : "bg-transparent text-gray-400 hover:text-ink"
              )}
            >
              CRAFT
            </button>
            <button 
              onClick={() => setRecruiterMode(true)}
              className={cn(
                "text-[9px] font-extrabold uppercase tracking-widest px-5 py-1.5 rounded-full transition-all",
                recruiterMode ? "bg-white text-ink shadow-sm" : "bg-transparent text-gray-400 hover:text-ink"
              )}
            >
              DATA
            </button>
          </div>
          <a href="#experience" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest hover:text-accent transition-colors">Path</a>
          <a href="#projects" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest hover:text-accent transition-colors">Case Studies</a>
          <a href="#skills" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest hover:text-accent transition-colors">Stack</a>
          <div className="flex items-center gap-4 border-l border-accent/10 ml-2 pl-6">
            <a href={`mailto:${portfolioData.personal.email}`} className="bg-accent text-bg-warm px-6 py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 transition-all">Connect</a>
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
          <a href="#blog" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Blogs</a>
        </motion.div>
      )}
    </header>
  );
};
