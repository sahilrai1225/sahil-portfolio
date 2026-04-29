// import { motion } from 'motion/react';
// import { portfolioData } from '../data/portfolio';
// import { BrainCircuit, Cpu, ShieldCheck, Zap } from 'lucide-react';

// export const About = () => {
//   return (
//     <section id="about" className="py-32 border-t border-grey-border">
//       <div className="grid lg:grid-cols-2 gap-24 items-center">
//         {/* About Photo / Card */}
//         <motion.div
//            initial={{ opacity: 0, x: -20 }}
//            whileInView={{ opacity: 1, x: 0 }}
//            viewport={{ once: true }}
//            className="relative"
//         >
//           <div className="aspect-[4/5] bg-black-pure border border-grey-border overflow-hidden relative group">
//              {portfolioData.personal.image && (
//                <div className="relative w-full h-full overflow-hidden">
//                  <img 
//                    src={portfolioData.personal.image} 
//                    alt="Sahil Rai"
//                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
//                    referrerPolicy="no-referrer"
//                  />
//                  <motion.div 
//                    animate={{ y: ["0%", "100%", "0%"] }}
//                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                    className="absolute left-0 right-0 h-[2px] bg-accent/30 blur-[2px] pointer-events-none z-20"
//                  />
//                  <motion.div 
//                    animate={{ y: ["0%", "100%", "0%"] }}
//                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
//                    className="absolute left-0 right-0 h-[0.5px] bg-accent pointer-events-none z-20"
//                  />
//                </div>
//              )}
//              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black-pure/90 via-black-pure/40 to-transparent p-12 z-10 border-t border-white/5 backdrop-blur-sm">
//                 <h3 className="text-4xl font-serif italic text-white mb-2">Sahil Rai</h3>
//                 <p className="text-[10px] font-medium text-accent uppercase tracking-[0.4em] font-mono">{portfolioData.personal.title}</p>
//              </div>
//              {/* Silhouette placeholder fallback */}
//              {!portfolioData.personal.image && (
//                <div className="absolute inset-0 flex items-center justify-center opacity-5">
//                   <BrainCircuit size={250} className="text-white" />
//                </div>
//              )}
//           </div>
//           <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/5 blur-[120px] -z-10" />
//         </motion.div>

//         {/* About Text */}
//         <motion.div
//            initial={{ opacity: 0, x: 20 }}
//            whileInView={{ opacity: 1, x: 0 }}
//            viewport={{ once: true }}
//            transition={{ delay: 0.2 }}
//         >
//           <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block font-sans">Investigation Substrate</span>
//           <h2 className="text-6xl md:text-8xl font-serif text-white leading-[1.05] mb-12">
//             Theoretical <br/><span className="italic opacity-80">Foundation.</span>
//           </h2>
//           <div className="space-y-10 text-grey-text font-sans leading-relaxed text-base">
//             <p className="border-l border-accent/30 pl-10">
//               I’m a data-driven <span className="text-white-off font-medium italic">AI/ML Architect</span> focused on building production-grade intelligent systems that deliver measurable business impact. My work spans the full lifecycle—from data exploration and statistical validation to model deployment and scalable AI architectures.
//             </p>
//             <p className="border-l border-accent/30 pl-10">
//               I’ve engineered and deployed machine learning and NLP systems across domains like finance, healthcare, and e-commerce, consistently translating raw data into actionable decisions. My models are designed to integrate with real-world workflows, power dashboards, and drive decision systems.
//             </p>
//             <p className="border-l border-accent/30 pl-10">
//               I specialize in <span className="text-accent font-medium">LLMs, Retrieval-Augmented Generation (RAG), and deep learning architectures</span>, consistently achieving significant performance gains and latency reductions. I focus on ensuring that intelligent systems are reliable, explainable, and ready for production-scale deployment.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-px bg-grey-border border border-grey-border mt-16">
//              <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
//                 <div className="text-4xl font-serif italic text-accent mb-2 group-hover:text-white transition-colors">2023+</div>
//                 <div className="text-[9px] font-medium text-grey-text-light uppercase tracking-[0.3em] font-sans">Active Research</div>
//              </div>
//              <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
//                 <div className="text-4xl font-serif italic text-white-off mb-2 group-hover:text-accent transition-colors">12+</div>
//                 <div className="text-[9px] font-medium text-grey-text-light uppercase tracking-[0.3em] font-sans">Systems Logged</div>
//              </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { BrainCircuit } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-32 border-t border-grey-border">
      <div className="grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-black-pure border border-grey-border overflow-hidden relative group rounded-xl">

            {/* ✅ FORCE IMAGE (no dependency issue now) */}
            <img
              src="/src/assets/profile.png"
              alt="Sahil Rai"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 
              group-hover:grayscale-0 group-hover:opacity-100 
              transition-all duration-700 scale-105 group-hover:scale-100"
            />

            {/* 🔥 SCAN LINE EFFECT */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-accent/40 blur-[3px] pointer-events-none z-20"
            />

            {/* 🔥 GLOW OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            {/* NAME */}
            <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
              <h3 className="text-4xl font-serif italic text-white tracking-tight">
                Sahil Rai
              </h3>
              <p className="text-[10px] tracking-[0.4em] uppercase text-accent mt-2 font-mono">
                AI/ML Engineer
              </p>
            </div>

            {/* fallback */}
            {!portfolioData.personal.image && (
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <BrainCircuit size={250} className="text-white" />
              </div>
            )}
          </div>

          {/* glow */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent/10 blur-[140px] -z-10" />
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-10 block font-mono">
            INVESTIGATION SUBSTRATE
          </span>

          <h2 className="text-6xl md:text-8xl font-serif leading-[1.05] mb-12 text-white tracking-tight">
            Theoretical <br />
            <span className="italic text-white/70">Foundation.</span>
          </h2>

          <div className="space-y-10 text-grey-text leading-relaxed text-[15px]">

            <p className="border-l border-accent/30 pl-8 hover:border-accent transition-colors">
              I’m a data-driven{" "}
              <span className="text-white font-medium italic">
                AI/ML Architect
              </span>{" "}
              focused on building production-grade intelligent systems that
              deliver measurable business impact. My work spans the full
              lifecycle—from data exploration to scalable deployment.
            </p>

            <p className="border-l border-accent/30 pl-8 hover:border-accent transition-colors">
              I’ve engineered machine learning and NLP systems across finance,
              healthcare, and e-commerce, translating raw data into actionable
              decisions and production-ready pipelines.
            </p>

            <p className="border-l border-accent/30 pl-8 hover:border-accent transition-colors">
              I specialize in{" "}
              <span className="text-accent font-medium">
                LLMs, RAG architectures, and deep learning systems
              </span>
              , achieving performance gains while maintaining reliability,
              scalability, and interpretability.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-px bg-grey-border border border-grey-border mt-16">

            <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-all">
              <div className="text-4xl font-serif italic text-accent mb-2 group-hover:text-white transition-colors">
                2023+
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-grey-text-light">
                Active Research
              </div>
            </div>

            <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-all">
              <div className="text-4xl font-serif italic text-white-off mb-2 group-hover:text-accent transition-colors">
                12+
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-grey-text-light">
                Systems Built
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};