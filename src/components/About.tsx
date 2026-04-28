import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { BrainCircuit, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 border-t border-accent-soft/20">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        {/* About Photo / Card */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-[4/5] bg-bg-warm rounded-[4rem] overflow-hidden relative border border-accent/10 shadow-[0_40px_100px_-20px_rgba(184,157,119,0.2)] group">
             {portfolioData.personal.image && (
               <div className="relative w-full h-full overflow-hidden">
                 <img 
                   src={portfolioData.personal.image} 
                   alt="Sahil Rai"
                   className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   referrerPolicy="no-referrer"
                 />
                 <motion.div 
                   animate={{ y: ["0%", "100%", "0%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute left-0 right-0 h-1 bg-accent/30 blur-sm pointer-events-none z-20"
                 />
                 <motion.div 
                   animate={{ y: ["0%", "100%", "0%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute left-0 right-0 h-[2px] bg-accent pointer-events-none z-20"
                 />
               </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-accent/5 to-transparent flex flex-col justify-end p-12 z-10">
                <h3 className="text-4xl font-black text-ink tracking-tight uppercase mb-2">Sahil Rai</h3>
                <p className="text-xs font-black text-accent uppercase tracking-[0.4em] font-mono leading-relaxed">{portfolioData.personal.title}</p>
             </div>
             {/* Silhouette placeholder fallback */}
             {!portfolioData.personal.image && (
               <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <BrainCircuit size={200} className="text-accent" />
               </div>
             )}
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* About Text */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">The Architect's Mindset</span>
          <h2 className="text-5xl font-black tracking-tighter text-ink leading-[1.1] uppercase mb-10">
            About <br/>Me.
          </h2>
          <div className="space-y-8 text-gray-500 font-medium leading-relaxed uppercase tracking-tight text-sm">
            <p className="border-l-2 border-accent/20 pl-8">
              I’m a data-driven <span className="text-ink font-bold">AI/ML engineer</span> focused on building production-grade intelligent systems that deliver measurable business impact. My work spans the full lifecycle—from data exploration and statistical validation to model deployment and scalable AI architectures.
            </p>
            <p className="border-l-2 border-accent/20 pl-8">
              I’ve engineered and deployed machine learning and NLP systems across domains like finance, healthcare, and e-commerce, consistently translating raw data into actionable decisions. My models don’t just perform well in isolation—they are designed to integrate with real-world workflows, powering dashboards, APIs, and decision systems used by stakeholders.
            </p>
            <p className="border-l-2 border-accent/20 pl-8">
              I specialize in <span className="text-accent font-black">LLMs, Retrieval-Augmented Generation (RAG), and deep learning architectures</span>, where I’ve built systems achieving over 90%+ accuracy and significant latency reductions through optimized retrieval and model design. I actively work on reducing hallucinations, improving interpretability, and ensuring systems are reliable, explainable, and production-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">
             <div className="p-6 bg-white rounded-3xl border border-accent-soft/10">
                <div className="text-2xl font-black text-accent mb-1 uppercase">2023+</div>
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Active Research</div>
             </div>
             <div className="p-6 bg-white rounded-3xl border border-accent-soft/10">
                <div className="text-2xl font-black text-ink mb-1 uppercase">12+</div>
                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Systems Logged</div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
