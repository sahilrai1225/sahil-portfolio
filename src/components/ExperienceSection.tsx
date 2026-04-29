import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { cn } from '../lib/utils';
import { Calendar, Building, Briefcase } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 border-t border-grey-border">
      <div className="mb-32 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block drop-shadow-sm font-sans">Professional Progression</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white underline underline-offset-8 decoration-1 decoration-grey-border-light">Journey & <br/><span className="italic opacity-80">Experience.</span></h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Minimalist Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-grey-border hidden md:block" />

        <div className="space-y-48">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col md:flex-row items-start gap-16 relative",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Refined Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-4 w-2 h-2 rounded-full bg-accent border border-black-pure hidden md:block z-10" />

              <div className="flex-1 w-full text-center md:text-right">
                <div className={cn(
                  "flex flex-col gap-4 mb-8",
                  idx % 2 === 0 ? "md:items-end" : "md:items-start"
                )}>
                  <span className="text-[10px] font-medium text-accent uppercase tracking-[0.3em] font-mono">{exp.period}</span>
                  <h3 className="text-4xl font-serif italic text-white-off">{exp.company}</h3>
                  <p className="text-[11px] font-medium text-grey-text-light uppercase tracking-widest">{exp.role}</p>
                </div>
                <div className={cn(
                  "flex flex-wrap gap-px bg-grey-border",
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  {exp.skills.map(s => (
                    <span key={s} className="text-[9px] font-medium uppercase tracking-widest bg-black-pure text-grey-text px-4 py-2 border border-grey-border-light/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full bg-grey-dark/40 border border-grey-border p-10 md:p-12 relative group hover:border-accent-light transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 text-[8px] font-medium text-grey-border-light uppercase tracking-[0.3em] font-mono group-hover:text-accent transition-colors">Strategic Analysis</div>
                <ul className="space-y-8 pt-8">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-6">
                      <div className="w-[1px] h-6 bg-accent-light group-hover:bg-accent mt-1 shrink-0 transition-colors" />
                      <p className="text-sm md:text-base text-grey-text leading-relaxed font-sans group-hover:text-white-off transition-colors">
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
