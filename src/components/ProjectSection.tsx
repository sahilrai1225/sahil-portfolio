import { motion } from 'motion/react';
import { portfolioData, Project } from '../data/portfolio';
import { Github, ArrowRight, Code2, Database, Layers, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Case Studies</span>
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">Top Engineering Projects</h2>
        <p className="text-gray-500 max-w-2xl">
          A selection of production-grade systems combining quantitative modeling, deep learning, and efficient infrastructure design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:shadow-accent/5 transition-all relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="text-[10px] font-bold text-accent px-2 py-0.5 bg-indigo-50 rounded uppercase font-mono">
                System #0{idx + 1}
              </div>
              <div className="flex gap-3">
                <a 
                  href={project.github} 
                  className="text-gray-300 hover:text-accent transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight mb-2 group-hover:text-accent transition-colors leading-tight">{project.title}</h3>
            <p className="text-gray-500 text-xs mb-8 leading-relaxed font-medium">{project.oneLiner}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] font-bold uppercase tracking-wider bg-gray-50 text-gray-400 px-2 py-1 rounded-full border border-gray-100 font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="border-t border-gray-50 pt-6">
              <div className="text-[10px] text-gray-400 uppercase font-bold mb-3 tracking-widest">Key Metric</div>
              <div className="flex items-center gap-3">
                <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: '92%' }}
                     className="h-full bg-accent"
                   />
                </div>
                <span className="text-xs font-bold text-accent font-mono">92%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal/Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            className="relative w-full max-w-4xl h-full bg-white shadow-2xl p-8 md:p-16 overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-8 text-xs font-bold uppercase tracking-widest hover:opacity-50 transition-opacity"
            >
              [ Close Case Study ]
            </button>

            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-400 px-2 py-1 border border-gray-100 rounded">Case Study: 0{portfolioData.projects.indexOf(selectedProject) + 1}</span>
                 {selectedProject.github && (
                   <a href={selectedProject.github} className="text-gray-400 hover:text-black flex items-center gap-1 text-xs font-bold uppercase tracking-widest ml-4">
                     <Github size={14} /> Github Repo
                   </a>
                 )}
              </div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-none">{selectedProject.title}</h2>
              
              <div className="grid grid-cols-3 gap-8 mb-16 border-y border-gray-100 py-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 whitespace-nowrap">Core Architect</div>
                  <div className="text-sm font-semibold truncate">Sahil Rai</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Category</div>
                  <div className="text-sm font-semibold">AI/ML System</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Status</div>
                  <div className="text-sm font-semibold text-green-600">Production Ready</div>
                </div>
              </div>

              <div className="space-y-16">
                 <section>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black mb-6">
                    <Database size={14} /> Built With (Stack)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black mb-6">
                    <Layers size={14} /> System Insight & Impact
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">{selectedProject.oneLiner}</p>
                  <ul className="space-y-4">
                    {selectedProject.impact.map((im, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                        <CheckCircle2 size={18} className="text-black shrink-0 mt-0.5" />
                        {im}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="bg-black text-white p-8 rounded-3xl overflow-hidden relative group/metrics">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/metrics:opacity-20 transition-opacity">
                    <Database size={80} />
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8 relative z-10">System Telemetry & Data Visualization</h4>
                  
                  {/* Dynamic Interactive Layer based on Project Type */}
                  <div className="h-48 flex items-end gap-1 relative z-10">
                    {selectedProject.id === 'stock-market-prediction' && (
                       <div className="w-full h-full flex items-center justify-center border border-white/10 rounded-xl relative overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent)]" />
                          <div className="w-full px-4 space-y-4">
                            <div className="flex justify-between items-end h-24 gap-1">
                              {Array.from({ length: 30 }).map((_, i) => (
                                <div key={i} className="flex-1 bg-green-500/40 rounded-t-sm" style={{ height: `${30 + Math.sin(i * 0.5) * 40 + Math.random() * 20}%` }} />
                              ))}
                            </div>
                            <div className="flex justify-between text-[8px] font-mono text-gray-500">
                              <span>T-24H</span>
                              <span className="text-green-400">PREDICTED BULLISH REVERSAL</span>
                              <span>NOW</span>
                            </div>
                          </div>
                       </div>
                    )}
                    {selectedProject.id === 'ai-research-assistant' && (
                      <div className="w-full h-full grid grid-cols-5 gap-2 p-4">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <div key={i} className={cn("rounded-lg border flex items-center justify-center", i % 4 === 0 ? "bg-accent/20 border-accent/40" : "bg-white/5 border-white/10")}>
                             <div className={cn("w-1 h-1 rounded-full", i % 4 === 0 ? "bg-accent animate-pulse" : "bg-white/20")} />
                          </div>
                        ))}
                        <div className="col-span-5 text-center text-[8px] font-mono text-gray-400 mt-2 uppercase tracking-widest">Semantic Vector Retrieval Space</div>
                      </div>
                    )}
                    {selectedProject.id !== 'stock-market-prediction' && selectedProject.id !== 'ai-research-assistant' && (
                      Array.from({ length: 48 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-white/20 rounded-t-sm"
                          style={{ height: `${20 + Math.random() * 80}%` }}
                        />
                      ))
                    )}
                  </div>
                  <div className="mt-6 grid grid-cols-4 gap-4 relative z-10 border-t border-white/10 pt-6">
                    <div>
                      <div className="text-xl font-bold tracking-tighter mb-0.5">85.4%</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Confidence</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold tracking-tighter mb-0.5">14ms</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Lat (p99)</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold tracking-tighter mb-0.5">CPU 0.4</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Load Factor</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold tracking-tighter mb-0.5">99.9%</div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-gray-500">Uptime</div>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-6">Case Study Flow</h4>
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">01 Problem</div>
                      <div className="md:col-span-3 text-sm text-gray-700 leading-relaxed">{selectedProject.problem}</div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 border-t border-gray-200 pt-10">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">02 System Design</div>
                      <div className="md:col-span-3 text-sm text-gray-700 leading-relaxed">{selectedProject.systemDesign}</div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 border-t border-gray-200 pt-10">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">03 Approach</div>
                      <div className="md:col-span-3 text-sm text-gray-700 leading-relaxed">{selectedProject.approach}</div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 border-t border-gray-200 pt-10">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">04 Results</div>
                      <div className="md:col-span-3 text-sm text-gray-700 leading-relaxed font-bold">{selectedProject.results}</div>
                    </div>
                  </div>
                </section>

                <div className="p-8 border-2 border-black/5 rounded-3xl bg-black/5 flex flex-col items-center text-center gap-4">
                   <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Core Engineering Insight</div>
                   <p className="text-lg font-medium text-black max-w-lg">"{selectedProject.insights}"</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
