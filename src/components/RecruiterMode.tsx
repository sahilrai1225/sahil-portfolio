import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, CVOption } from '../data/portfolio';
import { Download, CheckCircle, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, User, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const MetricBar = ({ label, value }: { label: string; value: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 font-mono">{label}</span>
      <span className="text-[10px] font-black text-accent font-mono">{value}%</span>
    </div>
    <div className="h-1.5 w-full bg-accent/5 rounded-full overflow-hidden border border-accent/5">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-accent"
      />
    </div>
  </div>
);

export const RecruiterMode = () => {
  const [selectedProfile, setSelectedProfile] = useState<CVOption>(portfolioData.personal.cvOptions[0]);

  const filteredProjects = portfolioData.projects.filter(p => {
    if (selectedProfile.id === 'data-science') return p.category === 'Data Science';
    if (selectedProfile.id === 'ai-ml') return p.category === 'AI/ML' || p.category === 'NLP';
    if (selectedProfile.id === 'data-analysis') return p.category === 'Data Analysis';
    if (selectedProfile.id === 'bi-analyst') return p.category === 'BI & Analytics' || p.category === 'Data Science';
    return true;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 max-w-5xl mx-auto"
    >
      {/* Profile Selector */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {portfolioData.personal.cvOptions.map(opt => (
          <button
            key={opt.id}
            onClick={() => setSelectedProfile(opt)}
            className={cn(
              "px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-widest transition-all border shadow-lg",
              selectedProfile.id === opt.id 
                ? "bg-accent text-bg-warm border-accent shadow-accent/20" 
                : "bg-white text-gray-500 border-accent-soft/20 hover:border-accent"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="bg-white border border-accent-soft/10 rounded-[3rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(184,157,119,0.1)] relative overflow-hidden">
        {/* Abstract watermark */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none">
           <User size={600} />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 pb-16 border-b border-accent-soft/10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-accent/10 text-accent text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full font-mono">
                  Executive Profile: {selectedProfile.label}
                </span>
                <motion.div 
                  key={selectedProfile.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Match:</span>
                  <span className="text-xl font-black text-accent font-mono tracking-tighter">
                    {selectedProfile.id === 'ai-ml' ? '99.8%' : selectedProfile.id === 'data-science' ? '98.4%' : '96.2%'}
                  </span>
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-[1.1] text-ink">
                Sahil Rai
              </h1>
              <p className="text-gray-500 leading-relaxed text-xl font-medium italic border-l-4 border-accent pl-10">
                "{selectedProfile.summary}"
              </p>
            </div>
            <a 
              href={selectedProfile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-accent text-bg-warm px-12 py-6 rounded-2xl flex items-center gap-4 font-black uppercase tracking-widest text-[11px] hover:shadow-[0_20px_50px_-10px_rgba(184,157,119,0.4)] transition-all transform hover:-translate-y-1"
            >
              <Download size={20} /> Download CV
            </a>
          </div>

          {selectedProfile.neuralArchitectures ? (
            <section className="mb-20">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-10 font-mono tracking-widest">Neural Engineering Core</h3>
               <div className="grid md:grid-cols-3 gap-6">
                  {selectedProfile.neuralArchitectures.map(arc => (
                    <div key={arc.type} className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10 group hover:border-accent transition-all">
                       <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">{arc.type}</div>
                       <ul className="space-y-2 mb-6">
                          {arc.applications.map(app => (
                            <li key={app} className="text-[11px] font-bold text-ink uppercase tracking-tight">• {app}</li>
                          ))}
                       </ul>
                       <div className="pt-4 border-t border-accent-soft/10 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                          Result: <span className="text-accent">{arc.metrics}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          ) : selectedProfile.id === 'data-science' ? (
            <section className="mb-20">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-10 font-mono tracking-widest">Statistical Mining Core</h3>
               <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10">
                     <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">Predictive Modeling</div>
                     <p className="text-[11px] font-bold text-ink uppercase tracking-tight">Advanced Regression, Gradient Boosting, Survival Analysis</p>
                  </div>
                  <div className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10">
                     <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">Statistical Rigor</div>
                     <p className="text-[11px] font-bold text-ink uppercase tracking-tight">Hypothesis Testing, Bayesian Inference, Feature Engineering</p>
                  </div>
                  <div className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10">
                     <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">Operations</div>
                     <p className="text-[11px] font-bold text-ink uppercase tracking-tight">ETL Pipelines, Data Governance, Cloud Scaling</p>
                  </div>
               </div>
            </section>
          ) : (
            <section className="mb-20">
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-10 font-mono tracking-widest">Analytical Frameworks</h3>
               <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10">
                     <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">Enterprise BI</div>
                     <p className="text-[11px] font-bold text-ink uppercase tracking-tight">Star Schemas, DAX Optimization, Performance Tuning</p>
                  </div>
                  <div className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10">
                     <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">Impact Metrics</div>
                     <p className="text-[11px] font-bold text-ink uppercase tracking-tight">KPI Definition, Dashboard UX, Automated Reporting</p>
                  </div>
                  <div className="p-8 bg-bg-warm/30 rounded-3xl border border-accent-soft/10">
                     <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 font-mono">Synthesis</div>
                     <p className="text-[11px] font-bold text-ink uppercase tracking-tight">Data Storytelling, Stakeholder Alignment, Root Cause Analysis</p>
                  </div>
               </div>
            </section>
          )}

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div className="bg-bg-warm/20 rounded-[3rem] p-12 border border-accent/10">
              <h3 className="text-xl font-black mb-8 uppercase tracking-tighter text-ink italic">Core Competency Matrix</h3>
              <div className="space-y-6">
                {selectedProfile.id === 'ai-ml' && (
                  <>
                    <MetricBar label="Large Language Models (LLM)" value={98} />
                    <MetricBar label="RAG Architecture Design" value={95} />
                    <MetricBar label="Neural Network Optimization" value={92} />
                    <MetricBar label="Vector Database Integration" value={94} />
                  </>
                )}
                {selectedProfile.id === 'data-science' && (
                  <>
                    <MetricBar label="Statistical Inference" value={96} />
                    <MetricBar label="Predictive Modeling" value={94} />
                    <MetricBar label="EDA & Behavioral Mining" value={98} />
                    <MetricBar label="Experimentation (A/B)" value={90} />
                  </>
                )}
                {(selectedProfile.id === 'bi-analyst' || selectedProfile.id === 'data-analysis') && (
                  <>
                    <MetricBar label="Dashboard Architecture" value={96} />
                    <MetricBar label="ETL / Data Engineering" value={92} />
                    <MetricBar label="SQL Optimization" value={98} />
                    <MetricBar label="Business KPI Synthesis" value={94} />
                  </>
                )}
              </div>
            </div>

            <section>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-10 font-mono tracking-widest">Transmission Nodes</h3>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-ink group hover:text-accent cursor-pointer transition-colors">
                    <Mail size={16} className="text-accent" /> {portfolioData.personal.email}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-ink">
                    <Phone size={16} className="text-accent" /> {portfolioData.personal.phone}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-ink">
                    <MapPin size={16} className="text-accent" /> {portfolioData.personal.location}
                  </div>
               </div>
               <div className="mt-12 flex gap-4">
                  <div className="px-6 py-4 bg-ink text-white rounded-2xl flex items-center gap-3">
                     <ShieldCheck className="text-accent" size={16} />
                     <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Verified Expert</span>
                  </div>
                  <div className="px-6 py-4 bg-accent/10 border border-accent/20 text-accent rounded-2xl flex items-center gap-3">
                     <Zap size={16} />
                     <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">High Potential</span>
                  </div>
               </div>
            </section>
          </div>

          <section className="mb-20">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-10 font-mono tracking-widest">Flagship Impact</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id} className="p-8 bg-gray-50 rounded-3xl border border-accent-soft/10 group hover:border-accent transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="font-black text-lg uppercase tracking-tighter text-ink group-hover:text-accent transition-colors">{project.title}</h4>
                     <div className="flex gap-4">
                      {project.github && <a href={project.github} className="text-gray-400 hover:text-ink"><Github size={16} /></a>}
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-ink transition-colors" />
                     </div>
                  </div>
                  <ul className="space-y-3">
                     {project.impact.slice(0, 2).map((im, i) => (
                       <li key={i} className="text-xs font-medium text-gray-500 flex items-start gap-3 uppercase tracking-tight">
                         <span className="text-accent font-black">/</span>
                         {im}
                       </li>
                     ))}
                  </ul>
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <div className="md:col-span-2 p-12 text-center border-2 border-dashed border-accent-soft/10 rounded-3xl">
                   <p className="text-xs font-black uppercase tracking-widest text-gray-400">Loading additional cross-domain artifacts...</p>
                </div>
              )}
            </div>
          </section>

          <section className="mb-20">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-12 font-mono tracking-widest">Operational Experience</h3>
            <div className="space-y-16">
              {portfolioData.experience.map(exp => (
                <div key={exp.company} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-1 h-full bg-accent-soft/20" />
                  <div className="absolute -left-1 top-0 w-3 h-3 rounded-full bg-accent ring-8 ring-accent/10" />
                  
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <h4 className="font-black text-2xl uppercase tracking-tighter text-ink">{exp.company}</h4>
                      <div className="text-[10px] font-black text-accent mt-1 uppercase tracking-widest">{exp.role}</div>
                    </div>
                    <span className="text-[10px] font-black font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded-full uppercase tracking-widest border border-gray-100">{exp.period}</span>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-4">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-xs font-medium text-gray-500 leading-relaxed uppercase tracking-tight flex gap-3">
                         <span className="text-accent font-black">/</span>
                         {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap justify-center gap-12 border-t border-accent-soft/10 pt-16 relative overflow-hidden">
             <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
             <div className="w-full flex justify-between items-center mb-10 overflow-hidden whitespace-nowrap">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex gap-20"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex gap-12 items-center">
                      <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em] font-mono whitespace-nowrap">System_Core: Operational</span>
                      <span className="text-[8px] font-black text-accent uppercase tracking-[0.4em] font-mono whitespace-nowrap">Inference_Latency: 12ms</span>
                      <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em] font-mono whitespace-nowrap">Model_Precision: 0.984</span>
                    </div>
                  ))}
                </motion.div>
             </div>
             <a href={portfolioData.personal.linkedin} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-colors relative z-10 bg-white px-4">
               <Linkedin size={16} /> LinkedIn_Net
             </a>
             <a href={portfolioData.personal.github} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-accent transition-colors relative z-10 bg-white px-4">
               <Github size={16} /> Engineering_Repo
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
