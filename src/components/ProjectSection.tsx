import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, Project } from '../data/portfolio';
import { Github, ArrowRight, Code2, Database, Layers, CheckCircle2, Brain, LineChart } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

import { 
  ResponsiveContainer, 
  LineChart as RechartsLineChart, 
  Line, 
  BarChart as RechartsBarChart, 
  Bar, 
  PieChart as RechartsPieChart, 
  Pie, 
  RadarChart as RechartsRadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell 
} from 'recharts';

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 border-t border-grey-border">
      <div className="mb-32 text-center max-w-4xl mx-auto">
        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block drop-shadow-sm font-sans">Strategic Portfolios</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white mb-12">Selected <br/><span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-grey-border-light">Intelligence.</span></h2>
        <p className="text-grey-text font-sans leading-relaxed max-w-md mx-auto">
          Synthesizing production-grade models that bridge the gap between <span className="text-white-off font-medium">quantitative rigor</span> and minimalist system abstraction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grey-border border border-grey-border">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-black-pure p-10 md:p-16 hover:bg-black-soft transition-all relative overflow-hidden"
          >
            {/* Project "Image" / Illustration Slot */}
            <div className="aspect-[16/9] bg-grey-dark overflow-hidden relative border border-grey-border-light/20 mb-12">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
                {/* Specific project visuals could go here */}
                <div className="absolute inset-0 p-8 flex items-end justify-between bg-gradient-to-t from-black-pure/80 via-transparent to-transparent">
                   <div className="text-[9px] font-medium text-accent uppercase tracking-[0.2em] font-mono">SYS_CORE: {project.category}</div>
                   <div className="text-[9px] font-medium text-grey-text-light uppercase tracking-[0.2em] font-mono">0{idx+1} / 0{portfolioData.projects.length}</div>
                </div>
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                    {project.category === 'AI/ML' && <Brain size={120} className="text-white-off" />}
                    {project.category === 'NLP' && <Code2 size={120} className="text-white-off" />}
                    {project.category === 'Data Science' && <Database size={120} className="text-white-off" />}
                    {project.category === 'BI & Analytics' && <LineChart size={120} className="text-white-off" />}
                  </div>
                )}
            </div>

            <div className="space-y-8">
              <h3 className="text-4xl font-serif italic text-white-off leading-tight group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-grey-text text-sm leading-relaxed font-sans line-clamp-2 max-w-sm">{project.oneLiner}</p>

              <div className="flex flex-wrap gap-px bg-grey-border border border-grey-border max-w-fit">
                {project.tech.slice(0, 4).map(t => (
                  <span key={t} className="text-[9px] font-medium uppercase tracking-widest bg-black-pure text-grey-text px-4 py-2 border border-grey-border-light/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-10 border-t border-grey-border-light/20 flex items-center justify-between">
                <div className="text-[10px] font-medium text-white-off uppercase tracking-[0.2em] flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                  View Case Insight
                </div>
                <div className="text-xl font-light text-grey-text-light group-hover:text-accent group-hover:translate-x-2 transition-all">→</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal/Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black-pure/95 backdrop-blur-3xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-grey-dark border border-grey-border overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-black-pure border border-grey-border hover:border-grey-border-light rounded-full flex items-center justify-center transition-colors text-white-off"
              >
                <ArrowRight size={20} className="-rotate-180" />
              </button>

              <div className="h-full overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-12 min-h-full">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 p-8 md:p-16">
                    <header className="mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent px-4 py-2 border border-accent/20 bg-accent-soft">
                          Insight: {selectedProject.category}
                        </span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-mono">
                          NODE SEC_0{portfolioData.projects.indexOf(selectedProject) + 1}
                        </span>
                      </div>
                      <h2 className="text-5xl md:text-8xl font-serif text-white leading-[1] mb-12">
                        {selectedProject.title}
                      </h2>
                      <p className="text-xl text-grey-text font-serif italic border-l border-accent/30 pl-8 py-4 bg-black-pure/20">
                        "{selectedProject.oneLiner}"
                      </p>
                    </header>

                    <div className="space-y-20">
                      <section>
                        <h4 className="text-[10px] font-medium uppercase tracking-widest text-white-off mb-10 border-b border-grey-border pb-4 font-mono">Strategic Impact</h4>
                        <div className="grid gap-px bg-grey-border border border-grey-border">
                          {selectedProject.impact.map((point, idx) => (
                            <div key={idx} className="flex gap-6 p-8 bg-grey-dark hover:bg-black-soft transition-all">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                              <p className="text-sm font-sans text-grey-text leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <div className="flex items-center gap-4 mb-8 border-b border-grey-border pb-4">
                          <Layers size={14} className="text-accent" />
                          <h4 className="text-[10px] font-medium uppercase tracking-widest text-white-off font-mono">Architectural Components</h4>
                        </div>
                        <div className="flex flex-wrap gap-px bg-grey-border border border-grey-border">
                          {selectedProject.tech.map(t => (
                            <div key={t} className="px-6 py-4 bg-black-pure border border-grey-border-light/10 flex items-center gap-4 hover:bg-grey-dark transition-all group/tag">
                              <div className="w-1 h-1 rounded-full bg-accent-light group-hover/tag:bg-accent group-hover/tag:scale-125 transition-transform" />
                              <span className="text-[10px] font-medium uppercase tracking-widest text-grey-text group-hover:text-white transition-colors">{t}</span>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="bg-black-pure/40 p-10 md:p-16 border border-grey-border">
                        <h4 className="text-[10px] font-medium uppercase tracking-widest text-white-off mb-12 font-mono">Iterative Protocol Sequence</h4>
                        <div className="space-y-16">
                          {[
                            { label: 'The Problem', content: selectedProject.problem },
                            { label: 'System Design', content: selectedProject.systemDesign },
                            { label: 'Approach', content: selectedProject.approach },
                            { label: 'Results & ROI', content: selectedProject.results }
                          ].map((step, i) => (
                            <div key={step.label} className="relative pl-12 border-l border-grey-border">
                              <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent" />
                              <h5 className="text-[9px] font-medium uppercase tracking-[0.3em] text-accent mb-4 font-mono">{step.label}</h5>
                              <p className="text-sm font-sans text-grey-text leading-relaxed">{step.content}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <div className="p-12 bg-black-pure border border-grey-border relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Code2 size={150} className="text-white" />
                        </div>
                        <h4 className="text-[9px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-8 font-mono">Core Engineering Insight</h4>
                        <p className="text-3xl font-serif italic text-white relative z-10 leading-snug">
                          "{selectedProject.insights}"
                        </p>
                      </div>

                      <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                        {selectedProject.github && (
                          <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accent transition-all group">
                            <Github size={18} className="group-hover:scale-110 transition-transform" /> Repository
                          </a>
                        )}
                        {selectedProject.demo && (
                          <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-accent transition-all group">
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>                   {/* Right Column: Visualization & Persistence */}
                  <div className="lg:col-span-5 bg-black-pure/20 border-l border-grey-border p-8 md:p-16 sticky top-0 h-auto lg:h-full">
                    <div className="sticky top-16 space-y-12">
                      <section className="bg-black-soft border border-grey-border p-10 relative group/metrics">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover/metrics:opacity-10 transition-opacity">
                          <Database size={150} className="text-white" />
                        </div>
                        <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-grey-text-light mb-12 relative z-10 font-mono">Live Telemetry Sequence</h4>
                        
                        <div className="h-64 relative z-10 mb-12 border-b border-grey-border pb-8">
                          {selectedProject.chartType === 'line' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsLineChart data={selectedProject.chartData}>
                                <XAxis dataKey="date" hide />
                                <YAxis hide domain={['auto', 'auto']} />
                                <Tooltip 
                                  content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                      return (
                                        <div className="bg-black-pure border border-grey-border p-4 shadow-2xl">
                                          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-grey-text-light mb-2 font-mono">{label || 'TELEMETRY'}</p>
                                          {payload.map((p, i) => (
                                            <p key={i} className="text-xs font-medium text-white-off uppercase flex items-center justify-between gap-6">
                                              <span className="text-accent">{p.name}:</span>
                                              <span>{p.value}</span>
                                            </p>
                                          ))}
                                        </div>
                                      );
                                    }
                                    return null;
                                  }}
                                />
                                <Line name="Actual" type="monotone" dataKey="actual" stroke="#a58d63" strokeWidth={2} dot={false} />
                                <Line name="Forecast" type="monotone" dataKey="forecast" stroke="#606060" strokeWidth={1} strokeDasharray="5 5" dot={false} />
                              </RechartsLineChart>
                            </ResponsiveContainer>
                          )}
                          {selectedProject.chartType === 'bar' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsBarChart data={selectedProject.chartData}>
                                <XAxis dataKey="name" hide />
                                <Tooltip 
                                  content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                      return (
                                        <div className="bg-black-pure border border-grey-border p-4 shadow-2xl">
                                          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-accent mb-2 font-mono">{label}</p>
                                          <p className="text-xs font-medium text-white-off uppercase flex items-center justify-between gap-6">
                                            <span className="text-grey-text">Metric:</span>
                                            <span>{payload[0].value}</span>
                                          </p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  }}
                                />
                                <Bar dataKey="score" fill="#a58d63" />
                              </RechartsBarChart>
                            </ResponsiveContainer>
                          )}
                          {selectedProject.chartType === 'pie' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsPieChart>
                                <Pie
                                  data={selectedProject.chartData}
                                  innerRadius={60}
                                  outerRadius={80}
                                  paddingAngle={5}
                                  dataKey="value"
                                >
                                  <Cell fill="#a58d63" stroke="none" />
                                  <Cell fill="#222" stroke="none" />
                                </Pie>
                                <Tooltip 
                                  content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                      return (
                                        <div className="bg-black-pure border border-grey-border p-4 shadow-2xl">
                                          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-accent mb-2 font-mono">{payload[0].name}</p>
                                          <p className="text-xs font-medium text-white-off uppercase flex items-center justify-between gap-6">
                                            <span className="text-grey-text">Value:</span>
                                            <span>{payload[0].value}</span>
                                          </p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  }}
                                />
                              </RechartsPieChart>
                            </ResponsiveContainer>
                          )}
                          {selectedProject.chartType === 'radar' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedProject.chartData}>
                                <PolarGrid stroke="#333" />
                                <PolarAngleAxis dataKey="feature" tick={{ fill: '#666', fontSize: 9, fontWeight: 500 }} />
                                <Radar
                                  name="Impact"
                                  dataKey="weight"
                                  stroke="#a58d63"
                                  fill="#a58d63"
                                  fillOpacity={0.1}
                                />
                              </RechartsRadarChart>
                            </ResponsiveContainer>
                          )}
                          {!selectedProject.chartType && (
                            <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 border border-grey-border-light/10 bg-black-pure/40">
                               <Database size={40} className="text-accent mb-4 opacity-30" />
                               <span className="text-[9px] font-mono text-grey-text uppercase tracking-widest mb-4">Synthetic Telemetry Load</span>
                               <div className="w-full h-[1px] bg-grey-border overflow-hidden">
                                  <motion.div 
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    className="w-1/2 h-full bg-accent"
                                  />
                                </div>
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-12 relative z-10">
                          {selectedProject.metrics?.map(m => (
                            <div key={m.label}>
                              <div className="text-5xl font-serif italic text-white mb-2">{m.value}</div>
                              <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans">{m.label}</div>
                            </div>
                          )) || (
                            <>
                              <div>
                                <div className="text-5xl font-serif italic text-white mb-2">99.9%</div>
                                <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans">Uptime</div>
                              </div>
                              <div>
                                <div className="text-5xl font-serif italic text-white mb-2">40ms</div>
                                <div className="text-[9px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans">Latency</div>
                              </div>
                            </>
                          )}
                        </div>
                      </section>

                      <div className="p-10 border border-grey-border bg-black-pure/40">
                        <h4 className="text-[9px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-8 font-mono">Protocol Constraints</h4>
                        <div className="space-y-6">
                           <div className="flex justify-between items-center py-4 border-b border-grey-border/50">
                             <span className="text-[11px] font-medium text-grey-text uppercase tracking-widest">Hash integrity</span>
                             <span className="text-[10px] font-bold font-mono text-white-off">SECURED</span>
                           </div>
                           <div className="flex justify-between items-center py-4 border-b border-grey-border/50">
                             <span className="text-[11px] font-medium text-grey-text uppercase tracking-widest">Persistence</span>
                             <span className="text-[10px] font-bold font-mono text-white-off">ATOMIC_VOL</span>
                           </div>
                           <div className="flex justify-between items-center py-4 border-b border-grey-border/50">
                             <span className="text-[11px] font-medium text-grey-text uppercase tracking-widest">Network Edge</span>
                             <span className="text-[10px] font-bold font-mono text-white-off">GLOBAL_POP</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
