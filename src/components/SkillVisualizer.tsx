import { Code2, Brain, Database, LineChart, Cpu, Terminal, Sparkles } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { portfolioData } from '../data/portfolio';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export const SkillVisualizer = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedTools = portfolioData.skills.find(s => s.name === activeCategory)?.tools || [];

  return (
    <section id="skills" className="py-32 border-t border-grey-border">
      <div className="grid lg:grid-cols-12 gap-24">
        {/* Left Side: Core Proficiencies */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block drop-shadow-sm font-sans">The Quantitative Arsenal</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white underline underline-offset-8 decoration-1 decoration-grey-border-light mb-12">
              Core <br/>Proficiencies.
            </h2>
            <p className="text-grey-text max-w-md leading-relaxed font-sans">
              A specialized toolset engineered for <span className="text-white-off font-medium">high-fidelity modeling</span> and production-grade intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
             {portfolioData.skills.map((skill, idx) => (
               <motion.div
                 key={skill.name}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.05 }}
                 onClick={() => setActiveCategory(activeCategory === skill.name ? null : skill.name)}
                 onMouseEnter={() => setActiveCategory(skill.name)}
                 className={cn(
                   "group p-8 border transition-all cursor-pointer relative overflow-hidden",
                   activeCategory === skill.name 
                    ? "bg-grey-dark border-accent shadow-2xl shadow-accent/5 -translate-y-1" 
                    : "bg-black-pure border-grey-border hover:border-grey-border-light"
                 )}
               >
                  <div className="flex items-center gap-5 mb-6">
                     <div className={cn(
                       "w-12 h-12 flex items-center justify-center transition-all duration-500",
                       activeCategory === skill.name ? "bg-accent text-black-pure scale-110" : "bg-grey-dark text-accent-light group-hover:text-accent"
                     )}>
                        {skill.name === 'ML Modelling' && <Brain size={24} />}
                        {skill.name === 'NLP / Generative AI' && <Terminal size={24} />}
                        {skill.name === 'Data Engineering' && <Database size={24} />}
                        {skill.name === 'BI & Visualization' && <LineChart size={24} />}
                        {skill.name === 'Core Skills' && <Sparkles size={24} />}
                     </div>
                     <span className="text-xs font-medium uppercase tracking-[0.2em] text-white-off group-hover:text-white transition-colors">{skill.name}</span>
                  </div>
                  <div className="h-px w-full bg-grey-border overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-accent"
                    />
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="space-y-12">
             <div className="flex items-center gap-4">
                <h4 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light font-sans">Core Research Focus</h4>
                <div className="flex-grow h-px bg-grey-border" />
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {portfolioData.coreResearch.map((stat, i) => (
                  <div key={stat.name} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-grey-text">{stat.name}</span>
                      <span className="text-xs font-mono text-accent">{stat.value}%</span>
                    </div>
                    <div className="h-0.5 w-full bg-grey-border overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 2, delay: i * 0.1, ease: "circOut" }}
                        className="h-full bg-accent-light"
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-10 pt-12 border-t border-grey-border">
             <h4 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light font-sans">Cognitive & Architectural Strengths</h4>
             <div className="flex flex-wrap gap-16">
                {portfolioData.softSkills.map((s, i) => (
                  <div key={s.name} className="flex flex-col items-start gap-5">
                     <div className="relative w-20 h-20">
                        <svg className="w-full h-full -rotate-90">
                           <circle 
                              cx="40" cy="40" r="36" 
                              fill="none" stroke="currentColor" strokeWidth="1" 
                              className="text-grey-border"
                           />
                           <motion.circle 
                              cx="40" cy="40" r="36" 
                              fill="none" stroke="currentColor" strokeWidth="1" 
                              strokeDasharray={226}
                              initial={{ strokeDashoffset: 226 }}
                              whileInView={{ strokeDashoffset: 226 - (226 * s.value) / 100 }}
                              transition={{ duration: 2, ease: "easeInOut" }}
                              className="text-accent"
                           />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[11px] font-mono text-white-off">
                           {s.value}%
                        </div>
                     </div>
                     <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-grey-text whitespace-nowrap">{s.name}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Side: Radar & Stack */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[450px] bg-grey-dark border border-grey-border p-8 relative"
          >
             <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-grey-border-light" />
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-grey-text-light">Strategic Vector Mapping</span>
             </div>
             
             <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="75%" data={portfolioData.skills}>
                 <PolarGrid stroke="#333" strokeDasharray="3 3" />
                 <PolarAngleAxis 
                   dataKey="name" 
                   tick={{ fill: '#666', fontSize: 9, fontWeight: 500, letterSpacing: '0.15em' }} 
                 />
                 <Radar
                   name="Expertise"
                   dataKey="value"
                   stroke="#a58d63"
                   strokeWidth={2}
                   fill="#a58d63"
                   fillOpacity={0.05}
                 />
               </RadarChart>
             </ResponsiveContainer>
          </motion.div>

          {/* Tools Panel */}
          <AnimatePresence mode="wait">
            <motion.div 
               key={activeCategory || 'default'}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="bg-black-pure border border-grey-border p-12 min-h-[280px] relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Terminal size={150} className="text-white" />
               </div>
               <h4 className="text-[9px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-12 font-mono">
                 {activeCategory ? `Substrate Metadata: ${activeCategory}` : "System State: Pending Substrate Scan"}
               </h4>
               <div className="flex flex-wrap gap-px bg-grey-border border border-grey-border relative z-10 max-w-fit">
                 {selectedTools.length > 0 ? selectedTools.map((tool) => (
                   <span 
                     key={tool}
                     className="bg-black-pure text-grey-text text-[10px] font-medium uppercase tracking-widest px-6 py-3 border border-grey-border-light/10 font-mono hover:bg-grey-dark hover:text-white transition-all"
                   >
                     {tool}
                   </span>
                 )) : (
                   <div className="flex flex-col gap-6 p-2">
                      <p className="text-grey-text text-sm font-sans leading-relaxed italic border-l border-accent/40 pl-6 py-2">
                         Select a primary node to intercept architectural metadata and toolchain configurations.
                      </p>
                      <div className="flex gap-4">
                         <div className="w-1 h-1 bg-accent animate-pulse" />
                         <div className="w-1 h-1 bg-accent/40 animate-pulse delay-75" />
                         <div className="w-1 h-1 bg-accent/20 animate-pulse delay-150" />
                      </div>
                   </div>
                 )}
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
