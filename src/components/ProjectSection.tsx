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
    <section id="projects" className="py-32 border-t border-accent-soft/20">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">Case Studies</span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-ink leading-[1.1] uppercase mb-8">Selected <br/>Intelligence.</h2>
        <p className="text-gray-500 font-medium leading-relaxed">
          Developing production-grade models that bridge the gap between <span className="text-ink">quantitative rigor</span> and efficient system design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-white border border-accent-soft/10 rounded-[3rem] p-10 hover:border-accent hover:shadow-[0_40px_100px_-20px_rgba(184,157,119,0.15)] transition-all relative overflow-hidden"
          >
            {/* Project "Image" / Illustration Slot */}
            <div className="aspect-[16/9] bg-bg-warm rounded-[2rem] mb-10 overflow-hidden relative border border-accent/5">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                {/* Specific project visuals could go here */}
                <div className="absolute inset-0 p-8 flex items-end justify-between bg-gradient-to-t from-bg-warm/80 via-transparent to-transparent">
                   <div className="text-[10px] font-black text-accent uppercase tracking-widest font-mono">SYS_ARCH: {project.category}</div>
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest font-mono font-mono">0{idx+1}</div>
                </div>
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-80 transition-opacity">
                    {project.category === 'AI/ML' && <Brain size={80} className="text-accent" />}
                    {project.category === 'NLP' && <Code2 size={80} className="text-accent" />}
                    {project.category === 'Data Science' && <Database size={80} className="text-accent" />}
                    {project.category === 'BI & Analytics' && <LineChart size={80} className="text-accent" />}
                  </div>
                )}
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-[-0.03em] text-ink leading-tight uppercase group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-2">{project.oneLiner}</p>

              <div className="space-y-4">
                <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Code2 size={10} className="text-accent" /> Built With
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-[9px] font-black uppercase tracking-widest bg-accent/5 text-accent px-3 py-1.5 rounded-full border border-accent/10">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-300 px-1 py-1.5">+{project.tech.length - 4}</span>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-accent-soft/10 flex items-center justify-between">
                <div className="text-[10px] font-black text-ink uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  View Case Study
                </div>
                <ArrowRight size={18} className="text-accent group-hover:translate-x-2 transition-transform" />
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
              className="absolute inset-0 bg-white/90 backdrop-blur-3xl"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 rounded-[3rem] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowRight size={20} className="-rotate-180" />
              </button>

              <div className="h-full overflow-y-auto custom-scrollbar">
                <div className="grid lg:grid-cols-12 min-h-full">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 p-8 md:p-16">
                    <header className="mb-16">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent px-3 py-1 bg-accent/10 rounded-full">
                          Case Study: {selectedProject.category}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-400 font-mono">
                          0{portfolioData.projects.indexOf(selectedProject) + 1}
                        </span>
                      </div>
                      <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-ink leading-[0.9] mb-8 uppercase">
                        {selectedProject.title}
                      </h2>
                      <p className="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-accent pl-8 py-2">
                        "{selectedProject.oneLiner}"
                      </p>
                    </header>

                    <div className="space-y-20">
                      <section>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-8 border-b border-gray-100 pb-4">Strategic Impact</h4>
                        <div className="grid gap-4">
                          {selectedProject.impact.map((point, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-200/50 hover:bg-white hover:shadow-xl hover:shadow-accent/5 transition-all">
                              <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={16} className="text-accent" />
                              </div>
                              <p className="text-sm font-semibold text-gray-700 leading-relaxed">{point}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section>
                        <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
                          <Layers size={18} className="text-accent" />
                          <h4 className="text-xs font-bold uppercase tracking-widest text-black">Built With</h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map(t => (
                            <div key={t} className="px-5 py-3 bg-bg-warm/50 border border-accent/20 rounded-2xl flex items-center gap-3 hover:border-accent hover:bg-white transition-all group/tag">
                              <div className="w-2 h-2 rounded-full bg-accent group-hover/tag:scale-125 transition-transform" />
                              <span className="text-[11px] font-black uppercase tracking-widest text-ink">{t}</span>
                            </div>
                          ))}
                        </div>
                      </section>

                      <section className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-200">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-10">Case Study Flow</h4>
                        <div className="space-y-12">
                          {[
                            { label: 'The Problem', content: selectedProject.problem },
                            { label: 'System Design', content: selectedProject.systemDesign },
                            { label: 'Approach', content: selectedProject.approach },
                            { label: 'Results & ROI', content: selectedProject.results }
                          ].map((step, i) => (
                            <div key={step.label} className="relative pl-10">
                              <div className="absolute left-0 top-0 w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400 font-mono">
                                0{i+1}
                              </div>
                              <h5 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3">{step.label}</h5>
                              <p className="text-sm font-medium text-gray-600 leading-relaxed">{step.content}</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      <div className="p-10 bg-black text-white rounded-[2.5rem] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Code2 size={120} />
                        </div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Core Engineering Insight</h4>
                        <p className="text-2xl font-bold tracking-tight italic relative z-10 leading-snug">
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
                  </div>

                  {/* Right Column: Visualization & Persistence */}
                  <div className="lg:col-span-5 bg-gray-50 border-l border-gray-100 p-8 md:p-16 sticky top-0 h-auto lg:h-full">
                    <div className="sticky top-16 space-y-12">
                      <section className="bg-black text-white p-10 rounded-[3rem] overflow-hidden relative group/metrics shadow-2xl shadow-black/20">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover/metrics:opacity-20 transition-opacity">
                          <Database size={100} />
                        </div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-10 relative z-10 font-mono tracking-[0.2em]">Live System Telemetry</h4>
                        
                        <div className="h-64 relative z-10 mb-12 border-b border-white/10 pb-4">
                          {selectedProject.chartType === 'line' && (
                            <ResponsiveContainer width="100%" height="100%">
                              <RechartsLineChart data={selectedProject.chartData}>
                                <XAxis dataKey="date" hide />
                                <YAxis hide domain={['auto', 'auto']} />
                                <Tooltip 
                                  content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                      return (
                                        <div className="bg-bg-warm/10 backdrop-blur-xl border border-accent/20 p-4 rounded-xl shadow-2xl">
                                          <p className="text-[10px] font-black uppercase tracking-tighter text-gray-500 mb-2 font-mono">{label || 'TELEMETRY'}</p>
                                          {payload.map((p, i) => (
                                            <p key={i} className="text-xs font-black text-white uppercase flex items-center justify-between gap-4">
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
                                <Line name="Actual" type="monotone" dataKey="actual" stroke="#B89D77" strokeWidth={3} dot={false} />
                                <Line name="Forecast" type="monotone" dataKey="forecast" stroke="#fff" strokeWidth={2} strokeDasharray="5 5" dot={false} />
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
                                        <div className="bg-bg-warm/10 backdrop-blur-xl border border-accent/20 p-4 rounded-xl shadow-2xl">
                                          <p className="text-[10px] font-black uppercase tracking-tighter text-accent mb-2 font-mono">{label}</p>
                                          <p className="text-xs font-black text-white uppercase flex items-center justify-between gap-4">
                                            <span className="text-gray-500">Metric:</span>
                                            <span>{payload[0].value}</span>
                                          </p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  }}
                                />
                                <Bar dataKey="score" fill="#B89D77" radius={[4, 4, 0, 0]} />
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
                                  <Cell fill="#B89D77" />
                                  <Cell fill="#333" />
                                </Pie>
                                <Tooltip 
                                  content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                      return (
                                        <div className="bg-bg-warm/10 backdrop-blur-xl border border-accent/20 p-4 rounded-xl shadow-2xl">
                                          <p className="text-[10px] font-black uppercase tracking-tighter text-accent mb-2 font-mono">{payload[0].name}</p>
                                          <p className="text-xs font-black text-white uppercase flex items-center justify-between gap-4">
                                            <span className="text-gray-400">Count:</span>
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
                                <PolarAngleAxis dataKey="feature" tick={{ fill: '#666', fontSize: 10 }} />
                                <Radar
                                  name="Impact"
                                  dataKey="weight"
                                  stroke="#B89D77"
                                  fill="#B89D77"
                                  fillOpacity={0.6}
                                />
                                <Tooltip 
                                  content={({ active, payload, label }) => {
                                    if (active && payload && payload.length) {
                                      return (
                                        <div className="bg-bg-warm/10 backdrop-blur-xl border border-accent/20 p-4 rounded-xl shadow-2xl">
                                          <p className="text-[10px] font-black uppercase tracking-tighter text-accent mb-1 font-mono">{label}</p>
                                          <p className="text-xs font-black text-white uppercase">
                                            Weight: <span className="text-accent">{payload[0].value}%</span>
                                          </p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  }}
                                />
                              </RechartsRadarChart>
                            </ResponsiveContainer>
                          )}
                          {!selectedProject.chartType && (
                            <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 border border-white/10 rounded-[2rem] bg-white/5">
                               <Database size={40} className="text-accent mb-4 opacity-40" />
                               <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Synthetic Telemetry Load</span>
                               <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div 
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    className="w-1/2 h-full bg-accent"
                                  />
                               </div>
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-8 relative z-10">
                          {selectedProject.metrics?.map(m => (
                            <div key={m.label}>
                              <div className="text-4xl font-extrabold tracking-tighter mb-1 text-white">{m.value}</div>
                              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-mono">{m.label}</div>
                            </div>
                          )) || (
                            <>
                              <div>
                                <div className="text-4xl font-extrabold tracking-tighter mb-1 text-white">99.9%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-mono">Uptime</div>
                              </div>
                              <div>
                                <div className="text-4xl font-extrabold tracking-tighter mb-1 text-white">40ms</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-mono">Latency</div>
                              </div>
                            </>
                          )}
                        </div>
                      </section>

                      <div className="p-8 border border-gray-200 rounded-[2.5rem] bg-white/50 backdrop-blur-sm">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">System Architecture Summary</h4>
                        <div className="space-y-4">
                           <div className="flex justify-between items-center py-3 border-b border-gray-100">
                             <span className="text-sm font-semibold text-gray-500">Security Tier</span>
                             <span className="text-xs font-bold font-mono text-black">ENCRYPTED@REST</span>
                           </div>
                           <div className="flex justify-between items-center py-3 border-b border-gray-100">
                             <span className="text-sm font-semibold text-gray-500">Data Lifecycle</span>
                             <span className="text-xs font-bold font-mono text-black">ATOMIC_WRITES</span>
                           </div>
                           <div className="flex justify-between items-center py-3 border-b border-gray-100">
                             <span className="text-sm font-semibold text-gray-500">Load Profile</span>
                             <span className="text-xs font-bold font-mono text-black">AUTO_SCALING</span>
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
