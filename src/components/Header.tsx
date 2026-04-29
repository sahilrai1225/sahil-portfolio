import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = ({ recruiterMode, setRecruiterMode }: { recruiterMode: boolean, setRecruiterMode: (v: boolean) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-pure/80 backdrop-blur-md border-b border-grey-border">
      <div className="mx-auto max-w-7xl px-6 h-24 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-[10px] tracking-[0.4em] font-semibold text-grey-text uppercase mb-1 drop-shadow-sm">Portfolio // 2024</h1>
          <div className="text-2xl font-serif italic text-white group-hover:text-accent transition-colors">Sahil Rai</div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          <div className="flex bg-grey-dark p-1 rounded-sm items-center border border-grey-border-light/30">
            <button 
              onClick={() => setRecruiterMode(false)}
              className={cn(
                "text-[9px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-sm transition-all",
                !recruiterMode ? "bg-white text-black-pure" : "bg-transparent text-grey-text hover:text-white"
              )}
            >
              Selected Works
            </button>
            <button 
              onClick={() => setRecruiterMode(true)}
              className={cn(
                "text-[9px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-sm transition-all",
                recruiterMode ? "bg-white text-black-pure" : "bg-transparent text-grey-text hover:text-white"
              )}
            >
              Archival
            </button>
          </div>
          
          <div className="flex space-x-10 text-[10px] tracking-[0.2em] uppercase text-grey-text-light">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-6 border-l border-grey-border-light/20 ml-2 pl-8">
             <a href={`mailto:${portfolioData.personal.email}`} className="sophisticated-button !py-2.5 !px-6">
              Connect
             </a>
          </div>
        </nav>

        {/* Mobile menu trigger */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black-soft border-b border-grey-border overflow-hidden"
          >
             <div className="p-8 flex flex-col gap-6">
                <button 
                  onClick={() => { setRecruiterMode(!recruiterMode); setIsMenuOpen(false); }}
                  className="text-[10px] font-bold uppercase tracking-widest py-3 border border-grey-border-light text-center text-white"
                >
                  {recruiterMode ? "Product Overview" : "Archival Insight"}
                </button>
                <a href="#projects" className="text-2xl font-serif italic text-white" onClick={() => setIsMenuOpen(false)}>Work</a>
                <a href="#about" className="text-2xl font-serif italic text-white" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="text-2xl font-serif italic text-white" onClick={() => setIsMenuOpen(false)}>Contact</a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
