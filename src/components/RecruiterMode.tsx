// import { motion } from "motion/react";

// type Props = {
//   setRecruiterMode: (value: boolean) => void;
// };

// export function RecruiterMode({ setRecruiterMode }: Props) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -40 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen flex flex-col items-center justify-center text-center px-6"
//     >
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">
//         Recruiter Mode 🚀
//       </h1>

//       <p className="max-w-2xl text-lg text-gray-400 mb-8">
//         This mode highlights key achievements, projects, and skills in a
//         structured, quick-scan format designed for recruiters.
//       </p>

//       <div className="grid md:grid-cols-3 gap-6 mb-10">
//         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
//           <h3 className="text-xl font-semibold mb-2">Projects</h3>
//           <p className="text-sm text-gray-400">
//             AI/ML, Full Stack, and Data-driven applications with real-world impact.
//           </p>
//         </div>

//         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
//           <h3 className="text-xl font-semibold mb-2">Skills</h3>
//           <p className="text-sm text-gray-400">
//             Python, React, ML, DL, FastAPI, and modern web technologies.
//           </p>
//         </div>

//         <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
//           <h3 className="text-xl font-semibold mb-2">Experience</h3>
//           <p className="text-sm text-gray-400">
//             Hands-on projects, problem solving, and scalable system design.
//           </p>
//         </div>
//       </div>

//       <button
//         onClick={() => setRecruiterMode(false)}
//         className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
//       >
//         Exit Recruiter Mode
//       </button>
//     </motion.div>
//   );
// }
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
              "px-8 py-4 rounded-[2rem] text-[10px] font-medium uppercase tracking-[0.3em] transition-all border shadow-lg font-sans",
              selectedProfile.id === opt.id 
                ? "bg-accent text-black-pure border-accent shadow-accent/20" 
                : "bg-grey-dark text-grey-text-light border-grey-border hover:border-accent"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="bg-black-pure border border-grey-border rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
        {/* Abstract watermark */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none text-white">
           <User size={600} />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 pb-16 border-b border-grey-border">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-accent/10 border border-accent/20 text-accent text-[9px] font-medium uppercase tracking-[0.3em] px-4 py-1.5 rounded-full font-mono">
                  Executive Profile: {selectedProfile.label}
                </span>
                <motion.div 
                  key={selectedProfile.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-[10px] font-medium text-grey-text-light uppercase tracking-[0.3em] font-sans">Match:</span>
                  <span className="text-xl font-serif italic text-accent tracking-tighter">
                    {selectedProfile.id === 'ai-ml' ? '99.8%' : selectedProfile.id === 'data-science' ? '98.4%' : '96.2%'}
                  </span>
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif tracking-tighter mb-8 italic text-white">
                Sahil Rai
              </h1>
              <p className="text-grey-text leading-relaxed text-base font-sans border-l border-accent/30 pl-10">
                "{selectedProfile.summary}"
              </p>
            </div>
            <a 
              href={selectedProfile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-accent text-black-pure border border-accent px-12 py-6 flex items-center gap-4 font-medium uppercase tracking-[0.3em] text-[10px] hover:bg-transparent hover:text-accent transition-all transform hover:-translate-y-1 font-sans"
            >
              <Download size={20} /> Download CV
            </a>
          </div>

          {selectedProfile.neuralArchitectures ? (
            <section className="mb-20">
               <h3 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-10 font-sans">Neural Engineering Core</h3>
               <div className="grid md:grid-cols-3 gap-px bg-grey-border border border-grey-border">
                  {selectedProfile.neuralArchitectures.map(arc => (
                    <div key={arc.type} className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                       <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">{arc.type}</div>
                       <ul className="space-y-4 mb-8">
                          {arc.applications.map(app => (
                            <li key={app} className="text-[11px] font-sans text-white-off flex items-start gap-3">
                               <span className="text-accent">/</span> {app}
                            </li>
                          ))}
                       </ul>
                       <div className="pt-6 border-t border-grey-border text-[9px] font-medium text-grey-text-light uppercase tracking-[0.3em] font-sans">
                          Result: <span className="text-white-off italic font-serif text-sm ml-2">{arc.metrics}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          ) : selectedProfile.id === 'data-science' ? (
            <section className="mb-20">
               <h3 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-10 font-sans">Statistical Mining Core</h3>
               <div className="grid md:grid-cols-3 gap-px bg-grey-border border border-grey-border">
                  <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                     <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">Predictive Modeling</div>
                     <p className="text-sm text-white-off font-sans italic opacity-80">Advanced Regression, Gradient Boosting, Survival Analysis</p>
                  </div>
                  <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                     <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">Statistical Rigor</div>
                     <p className="text-sm text-white-off font-sans italic opacity-80">Hypothesis Testing, Bayesian Inference, Feature Engineering</p>
                  </div>
                  <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                     <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">Operations</div>
                     <p className="text-sm text-white-off font-sans italic opacity-80">ETL Pipelines, Data Governance, Cloud Scaling</p>
                  </div>
               </div>
            </section>
          ) : (
            <section className="mb-20">
               <h3 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-10 font-sans">Analytical Frameworks</h3>
               <div className="grid md:grid-cols-3 gap-px bg-grey-border border border-grey-border">
                  <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                     <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">Enterprise BI</div>
                     <p className="text-sm text-white-off font-sans italic opacity-80">Star Schemas, DAX Optimization, Performance Tuning</p>
                  </div>
                  <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                     <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">Impact Metrics</div>
                     <p className="text-sm text-white-off font-sans italic opacity-80">KPI Definition, Dashboard UX, Automated Reporting</p>
                  </div>
                  <div className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                     <div className="text-accent text-[10px] font-medium uppercase tracking-[0.3em] mb-4 font-sans">Synthesis</div>
                     <p className="text-sm text-white-off font-sans italic opacity-80">Data Storytelling, Stakeholder Alignment, Root Cause Analysis</p>
                  </div>
               </div>
            </section>
          )}

          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div className="bg-grey-dark/20 border border-grey-border p-12">
              <h3 className="text-2xl font-serif mb-10 text-white italic">Core Competency Matrix</h3>
              <div className="space-y-8">
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
               <h3 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-10 font-sans">Transmission Nodes</h3>
               <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-white-off group hover:text-accent cursor-pointer transition-colors font-sans">
                    <Mail size={16} className="text-accent" /> {portfolioData.personal.email}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-white-off font-sans">
                    <Phone size={16} className="text-accent" /> {portfolioData.personal.phone}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-white-off font-sans">
                    <MapPin size={16} className="text-accent" /> {portfolioData.personal.location}
                  </div>
               </div>
               <div className="mt-12 flex gap-4">
                  <div className="px-6 py-4 bg-white border border-white text-black-pure flex items-center gap-3">
                     <ShieldCheck size={16} />
                     <span className="text-[9px] font-medium uppercase tracking-[0.3em] font-sans whitespace-nowrap">Verified Expert</span>
                  </div>
                  <div className="px-6 py-4 bg-transparent border border-accent text-accent flex items-center gap-3">
                     <Zap size={16} />
                     <span className="text-[9px] font-medium uppercase tracking-[0.3em] font-sans whitespace-nowrap">High Potential</span>
                  </div>
               </div>
            </section>
          </div>

          <section className="mb-20">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-10 font-sans">Flagship Impact</h3>
            <div className="grid md:grid-cols-2 gap-px bg-grey-border border border-grey-border">
              {filteredProjects.map(project => (
                <div key={project.id} className="p-10 bg-black-pure group hover:bg-grey-dark transition-colors">
                  <div className="flex justify-between items-start mb-8">
                    <h4 className="font-serif italic text-2xl text-white group-hover:text-accent transition-colors">{project.title}</h4>
                     <div className="flex gap-4">
                      {project.github && <a href={project.github} className="text-grey-text-light hover:text-white transition-colors"><Github size={16} /></a>}
                      <ExternalLink size={16} className="text-grey-text-light group-hover:text-white transition-colors" />
                     </div>
                  </div>
                  <ul className="space-y-4">
                     {project.impact.slice(0, 2).map((im, i) => (
                       <li key={i} className="text-sm font-sans text-grey-text opacity-80 flex items-start gap-4">
                         <span className="text-accent">—</span>
                         {im}
                       </li>
                     ))}
                  </ul>
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <div className="md:col-span-2 p-12 text-center border border-dashed border-grey-border">
                   <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans">Loading additional cross-domain artifacts...</p>
                </div>
              )}
            </div>
          </section>

          <section className="mb-20">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.4em] text-grey-text-light mb-12 font-sans">Operational Experience</h3>
            <div className="space-y-16">
              {portfolioData.experience.map(exp => (
                <div key={exp.company} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-px h-full bg-grey-border" />
                  <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-accent ring-4 ring-black-pure" />
                  
                  <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
                    <div>
                      <h4 className="font-serif italic text-2xl text-white">{exp.company}</h4>
                      <div className="text-[10px] font-medium text-accent mt-2 uppercase tracking-[0.3em] font-sans">{exp.role}</div>
                    </div>
                    <span className="text-[10px] font-medium font-sans text-grey-text-light bg-grey-dark px-4 py-2 border border-grey-border tracking-[0.3em]">{exp.period}</span>
                  </div>
                  
                  <ul className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-sm font-sans text-grey-text flex gap-4 leading-relaxed group">
                         <span className="text-accent opacity-50 group-hover:opacity-100 transition-opacity">—</span>
                         <span className="opacity-80 group-hover:opacity-100 transition-opacity">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap justify-between items-center gap-12 border-t border-grey-border pt-16 relative overflow-hidden">
             
             <div className="w-full flex justify-between items-center mb-6 overflow-hidden whitespace-nowrap opacity-30">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex gap-20"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="flex gap-12 items-center">
                      <span className="text-[9px] font-medium text-grey-text-light uppercase tracking-[0.4em] font-sans whitespace-nowrap">System_Core: Operational</span>
                      <span className="text-[9px] font-medium text-accent uppercase tracking-[0.4em] font-sans whitespace-nowrap">Inference_Latency: 12ms</span>
                      <span className="text-[9px] font-medium text-grey-text-light uppercase tracking-[0.4em] font-sans whitespace-nowrap">Model_Precision: 0.984</span>
                    </div>
                  ))}
                </motion.div>
             </div>
             <a href={portfolioData.personal.linkedin} className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-grey-text-light hover:text-accent transition-colors relative z-10 font-sans">
               <Linkedin size={16} /> LinkedIn_Net
             </a>
             <a href={portfolioData.personal.github} className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-grey-text-light hover:text-accent transition-colors relative z-10 font-sans">
               <Github size={16} /> Engineering_Repo
             </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};