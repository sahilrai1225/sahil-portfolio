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
    <section id="skills" className="py-32 border-t border-accent-soft/20">
      <div className="grid lg:grid-cols-2 gap-24">
        {/* Left Side: Core Proficiencies */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">The Arsenal</span>
            <h2 className="text-5xl font-black tracking-tighter text-ink leading-[1.1] uppercase mb-8">
              Core <br/>Proficiencies.
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed font-medium">
              A specialized toolset engineered for <span className="text-ink">high-fidelity modeling</span> and production-grade intelligence.
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
                 onMouseEnter={() => setActiveCategory(skill.name)}
                 className={cn(
                   "group p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden",
                   activeCategory === skill.name 
                    ? "bg-white border-accent shadow-2xl shadow-accent/10 -translate-y-1" 
                    : "bg-white/50 border-accent-soft/10 hover:border-accent-soft/30"
                 )}
               >
                  <div className="flex items-center gap-4 mb-4">
                     <div className={cn(
                       "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                       activeCategory === skill.name ? "bg-accent text-bg-warm" : "bg-bg-warm text-accent"
                     )}>
                        {skill.name === 'AI/ML' && <Brain size={20} />}
                        {skill.name === 'NLP/LLM' && <Terminal size={20} />}
                        {skill.name === 'Data Science' && <Database size={20} />}
                        {skill.name === 'Engineering' && <Cpu size={20} />}
                        {skill.name === 'Analytics' && <LineChart size={20} />}
                     </div>
                     <span className="text-xs font-black uppercase tracking-widest text-ink">{skill.name}</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      className="h-full bg-accent"
                    />
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="space-y-8 pt-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-mono">Cognitive & Architectural Strengths</h4>
             <div className="flex flex-wrap gap-12">
                {(portfolioData as any).softSkills.map((s: any, i: number) => (
                  <div key={s.name} className="flex flex-col items-center gap-4">
                     <div className="relative w-16 h-16">
                        <svg className="w-full h-full -rotate-90">
                           <circle 
                              cx="32" cy="32" r="28" 
                              fill="none" stroke="currentColor" strokeWidth="4" 
                              className="text-accent/10"
                           />
                           <motion.circle 
                              cx="32" cy="32" r="28" 
                              fill="none" stroke="currentColor" strokeWidth="4" 
                              strokeDasharray={176}
                              initial={{ strokeDashoffset: 176 }}
                              whileInView={{ strokeDashoffset: 176 - (176 * s.value) / 100 }}
                              className="text-accent"
                           />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-ink">
                           {s.value}%
                        </div>
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 whitespace-nowrap">{s.name}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Side: Radar & Stack */}
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-[450px] bg-white rounded-[3rem] p-8 border border-accent-soft/20 shadow-2xl shadow-accent/5 relative"
          >
             <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-100" />
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Strategic Vector Mapping</span>
             </div>
             
             <ResponsiveContainer width="100%" height="100%">
               <RadarChart cx="50%" cy="50%" outerRadius="75%" data={portfolioData.skills}>
                 <PolarGrid stroke="#E5E7EB" strokeDasharray="3 3" />
                 <PolarAngleAxis 
                   dataKey="name" 
                   tick={{ fill: '#9CA3AF', fontSize: 9, fontWeight: 800, letterSpacing: '0.15em' }} 
                 />
                 <Radar
                   name="Expertise"
                   dataKey="value"
                   stroke="var(--color-accent)"
                   strokeWidth={3}
                   fill="var(--color-accent)"
                   fillOpacity={0.08}
                 />
               </RadarChart>
             </ResponsiveContainer>
          </motion.div>

          {/* Tools Panel */}
          <AnimatePresence mode="wait">
            <motion.div 
               key={activeCategory || 'default'}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="bg-ink p-10 rounded-[3rem] min-h-[220px] relative overflow-hidden group shadow-2xl"
            >
               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Terminal size={100} className="text-bg-warm" />
               </div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-8 font-mono">
                 {activeCategory ? `Synthetic Metadata: ${activeCategory}` : "Select a domain to inspect substrate"}
               </h4>
               <div className="flex flex-wrap gap-2.5 relative z-10">
                 {selectedTools.length > 0 ? selectedTools.map((tool) => (
                   <span 
                     key={tool}
                     className="bg-white/5 text-white/70 text-[10px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-xl border border-white/10 font-mono hover:bg-accent hover:border-accent hover:text-bg-warm transition-all"
                   >
                     {tool}
                   </span>
                 )) : (
                   <div className="flex flex-col gap-4">
                      <p className="text-gray-500 text-[11px] font-medium leading-relaxed italic border-l-2 border-accent/30 pl-4 py-1">
                        Interact with the proficiency nodes to decode the underlying architectural stack.
                      </p>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                         <div className="w-2 h-2 rounded-full bg-accent/40 animate-pulse delay-75" />
                         <div className="w-2 h-2 rounded-full bg-accent/20 animate-pulse delay-150" />
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
