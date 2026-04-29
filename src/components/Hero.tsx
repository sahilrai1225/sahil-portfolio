import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, FileText } from 'lucide-react';
import { useEffect, useState } from 'react';

const titles = [
  "Predictive Models.",
  "Data Narratives.",
  "Deep Learning.",
  "Quantitative Rigor.",
  "System Scalability."
];

export const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-52 pb-24">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block drop-shadow-sm font-medium">
              {portfolioData.personal.title}
            </span>
          </motion.div>

          <div className="h-[180px] md:h-[260px] mb-12">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={titles[titleIdx]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-serif leading-[1.1] text-white"
              >
                {titles[titleIdx].split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "italic opacity-80 underline underline-offset-[12px] decoration-1 decoration-grey-border-light" : ""}>{word} </span>
                ))}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-grey-text max-w-md text-sm md:text-base leading-relaxed mb-12 font-sans"
          >
            Advancing the state of <span className="text-white-off font-medium">AI/ML engineering</span> through minimalist architectural principles and rigorous quantitative synthesis.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-8"
          >
            <a href="#projects" className="sophisticated-button">
              View Work
            </a>
            <div className="h-[1px] w-20 bg-grey-border-light"></div>
            <span className="text-[10px] uppercase tracking-widest text-grey-text-light font-medium">Available for Research</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="lg:col-span-5 hidden lg:block"
        >
          {/* Hero Illustration */}
          <div className="relative group">
            <div className="aspect-square bg-grey-dark/20 backdrop-blur-sm border border-grey-border overflow-hidden relative">
              <img 
                src={portfolioData.personal.image} 
                alt="Sahil Rai - Machine Learning Workflow"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/40 to-transparent pointer-events-none" />
              
              {/* Technical Overlays */}
              <div className="absolute top-6 left-6 flex gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                 <div className="w-1.5 h-1.5 rounded-full bg-grey-border-light" />
              </div>
              <div className="absolute bottom-6 right-6 text-[8px] font-mono text-grey-text-light uppercase tracking-widest bg-black-pure/60 px-2 py-1 backdrop-blur-md border border-grey-border">
                System_Entity_Profile // 0x5F1A
              </div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-r border-t border-accent/20 -z-10 group-hover:-top-6 group-hover:-right-6 transition-all duration-700" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l border-b border-accent/20 -z-10 group-hover:-bottom-6 group-hover:-left-6 transition-all duration-700" />
          </div>
        </motion.div>
      </div>

      {/* Hero Stats - Updated for Sophisticated theme */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-24 border-t border-grey-border mt-32"
      >
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3">Core Research</span>
          <div className="text-4xl font-serif text-white-off">05+ <span className="text-xs uppercase font-sans tracking-tighter text-grey-text">Systems</span></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3">Model Accuracy</span>
          <div className="text-4xl font-serif text-accent">95% <span className="text-xs uppercase font-sans tracking-tighter text-grey-text">Precision</span></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3">Data Synthesis</span>
          <div className="text-4xl font-serif text-white-off">12k+ <span className="text-xs uppercase font-sans tracking-tighter text-grey-text">Samples</span></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3">Quantitative</span>
          <div className="text-4xl font-serif text-accent">2.4k <span className="text-xs uppercase font-sans tracking-tighter text-grey-text">Hours</span></div>
        </div>
      </motion.div>
    </section>
  );
};
;
