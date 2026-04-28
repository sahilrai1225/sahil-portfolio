import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, Download, FileText } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-32 pb-24">
      <div className="max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
        >
          <span className="inline-block bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-8">
            Available for Strategic Engineering Roles
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-gray-900 leading-[0.9] mb-8 uppercase"
        >
          Engineering <span className="text-accent underline decoration-gray-200">Intelligence.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed mb-12"
        >
          Building production-grade AI systems for complex decision-making, specialized in <span className="text-black font-semibold">NLP, quantitative modeling</span>, and RAG architectures.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="bg-accent text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 group">
            Explore Case Studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#blog" className="bg-white border border-gray-200 text-gray-600 px-8 py-4 rounded-full flex items-center gap-3 font-bold uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-all">
            <FileText size={16} /> Research Notes
          </a>
        </motion.div>
      </div>

      {/* Hero Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-16 border-t border-gray-200 mt-24"
      >
        <div>
          <div className="text-5xl font-extrabold tracking-tighter mb-1 text-accent">05+</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Core Systems</div>
        </div>
        <div>
          <div className="text-5xl font-extrabold tracking-tighter mb-1">95%</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Precision</div>
        </div>
        <div>
          <div className="text-5xl font-extrabold tracking-tighter mb-1 text-accent">100+</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Commits</div>
        </div>
        <div>
          <div className="text-5xl font-extrabold tracking-tighter mb-1">2.4k</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono">Code Hrs</div>
        </div>
      </motion.div>
    </section>
  );
};
