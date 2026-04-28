import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';
import { Calendar, Building, Briefcase } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 border-t border-accent-soft/20">
      <div className="mb-24 text-center max-w-2xl mx-auto">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">Professional Odyssey</span>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-ink leading-[1.1] uppercase">Journey & <br/>Experience.</h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/40 via-accent/10 to-transparent hidden md:block" />

        <div className="space-y-32">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 relative",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-accent border-[3px] border-bg-warm hidden md:block z-10" />

              <div className="flex-1 w-full text-center md:text-right">
                <div className={cn(
                  "flex flex-col gap-2 mb-6",
                  idx % 2 === 0 ? "md:items-end" : "md:items-start"
                )}>
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] font-mono">{exp.period}</span>
                  <h3 className="text-3xl font-black tracking-[-0.03em] text-ink">{exp.company}</h3>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{exp.role}</p>
                </div>
                <div className={cn(
                  "flex flex-wrap gap-2 mb-8",
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  {exp.skills.map(s => (
                    <span key={s} className="text-[9px] font-black uppercase tracking-widest bg-accent/5 text-accent px-4 py-1.5 rounded-full border border-accent/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-accent/5 border border-accent-soft/10 relative group">
                <div className="absolute top-8 left-8 text-[8px] font-black text-accent/20 uppercase tracking-[0.3em] font-mono group-hover:text-accent transition-colors">Strategic Outcomes</div>
                <ul className="space-y-6 pt-6">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-2 shrink-0" />
                      <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed font-medium">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
