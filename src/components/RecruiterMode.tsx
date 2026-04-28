import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Download, CheckCircle, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

export const RecruiterMode = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 max-w-4xl mx-auto"
    >
      <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-black/5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16">
          <div className="max-w-xl">
            <span className="inline-block bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-4">Executive Summary</span>
            <h1 className="text-4xl font-extrabold tracking-tight mb-6 uppercase">High-Performance<br/>AI/ML Engineer</h1>
            <p className="text-gray-500 leading-relaxed text-lg italic">
              "Deploying intelligent, production-grade systems across finance, NLP, and security. Focused on measurable business outcomes through modular engineering and quantitative modeling."
            </p>
          </div>
          <button className="shrink-0 bg-accent text-white px-8 py-4 rounded-full flex items-center gap-2 font-bold uppercase tracking-widest text-xs hover:bg-indigo-700 transition-colors shadow-lg shadow-accent/20">
            <Download size={18} /> Download CV (PDF)
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <section>
             <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-2">Technical Core</h3>
             <div className="grid grid-cols-2 gap-4">
                {portfolioData.skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-accent shrink-0" />
                    <span className="text-sm font-semibold">{skill.name}</span>
                  </div>
                ))}
             </div>
          </section>

          <section>
             <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-2">Direct Contact</h3>
             <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <Mail size={16} className="text-gray-400" /> {portfolioData.personal.email}
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <Phone size={16} className="text-gray-400" /> {portfolioData.personal.phone}
                </div>
                <div className="flex items-center gap-3 text-sm font-medium">
                  <MapPin size={16} className="text-gray-400" /> {portfolioData.personal.location}
                </div>
             </div>
          </section>
        </div>

        <section className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-100 pb-2">Flagship Impact (Quick View)</h3>
          <div className="space-y-6">
            {portfolioData.projects.slice(0, 3).map(project => (
              <div key={project.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 group">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-lg">{project.title}</h4>
                   <div className="flex gap-4">
                    <a href={project.github} className="text-gray-400 hover:text-black"><Github size={16} /></a>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                   </div>
                </div>
                <ul className="space-y-2">
                   {project.impact.slice(0, 2).map((im, i) => (
                     <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                       {im}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-center gap-8 border-t border-gray-100 pt-12">
           <a href={portfolioData.personal.linkedin} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black">
             <Linkedin size={16} /> LinkedIn Professional
           </a>
           <a href={portfolioData.personal.github} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black">
             <Github size={16} /> Engineering Profile
           </a>
        </div>
      </div>
    </motion.div>
  );
};
