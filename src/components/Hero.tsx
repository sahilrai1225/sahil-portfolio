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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-40 pb-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-2xl">
          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {portfolioData.personal.title}
            </span>
          </motion.div>

          <div className="h-[140px] md:h-[200px] mb-10">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={titles[titleIdx]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[5.5rem] font-black tracking-[-0.04em] text-ink leading-[0.95] uppercase"
              >
                {titles[titleIdx].split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "text-accent underline decoration-accent/20 underline-offset-8" : ""}>{word} </span>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-12 font-medium"
          >
            I’m a data-driven <span className="text-ink font-bold">AI/ML engineer</span> focused on building production-grade intelligent systems that deliver measurable business impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-5"
          >
            <a href="#projects" className="bg-accent text-bg-warm px-8 py-4 rounded-full flex items-center gap-3 font-extrabold uppercase tracking-widest text-[10px] hover:shadow-2xl hover:shadow-accent/30 transition-all group">
              Explore The Systems <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#blog" className="bg-white border border-accent-soft/30 text-gray-500 px-8 py-4 rounded-full flex items-center gap-3 font-extrabold uppercase tracking-widest text-[10px] hover:border-accent hover:text-accent transition-all shadow-sm">
              <FileText size={16} /> Selected Blogs
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden lg:block"
        >
          {/* Dashboard Preview Mockup */}
          <div className="bg-white rounded-[3rem] p-8 shadow-[0_40px_100px_-20px_rgba(184,157,119,0.2)] border border-accent/10 relative z-10">
             <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-50">
               <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
               </div>
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">System Health: 99.9%</div>
             </div>
             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="h-24 bg-accent/5 rounded-2xl border border-accent/10 p-4 flex flex-col justify-between">
                   <div className="text-[10px] font-bold text-accent uppercase tracking-widest">Precision</div>
                   <div className="text-3xl font-black text-ink">95.4%</div>
                </div>
                <div className="h-24 bg-ink rounded-2xl p-4 flex flex-col justify-between text-white">
                   <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Lat (p99)</div>
                   <div className="text-3xl font-black">14ms</div>
                </div>
             </div>
             <div className="space-y-3">
                <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                   <div className="w-3/4 h-full bg-accent rounded-full" />
                </div>
                <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                   <div className="w-1/2 h-full bg-accent rounded-full opacity-60" />
                </div>
                <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                   <div className="w-2/3 h-full bg-accent rounded-full opacity-30" />
                </div>
             </div>
          </div>
          
          {/* Decorative shapes behind */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Hero Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 pt-20 border-t border-accent-soft/20 mt-32"
      >
        <div>
          <div className="text-5xl font-black tracking-[-0.04em] mb-2 text-accent uppercase">05+</div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-mono">Core Systems Built</div>
        </div>
        <div>
          <div className="text-5xl font-black tracking-[-0.04em] mb-2 text-ink uppercase">95%</div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-mono">Inference Precision</div>
        </div>
        <div>
          <div className="text-5xl font-black tracking-[-0.04em] mb-2 text-accent uppercase">12k+</div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-mono">Dataset Samples</div>
        </div>
        <div>
          <div className="text-5xl font-black tracking-[-0.04em] mb-2 text-ink uppercase">2.4k</div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-mono">Research Code Hours</div>
        </div>
      </motion.div>
    </section>
  );
};
