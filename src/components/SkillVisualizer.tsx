import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { portfolioData } from '../data/portfolio';
import { motion } from 'motion/react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export const SkillVisualizer = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedTools = portfolioData.skills.find(s => s.name === activeCategory)?.tools || [];

  return (
    <section id="skills" className="py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="h-[400px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={portfolioData.skills}>
              <PolarGrid stroke="#f3f4f6" />
              <PolarAngleAxis 
                dataKey="name" 
                tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }} 
              />
              <Radar
                name="Proficiency"
                dataKey="value"
                stroke="#000"
                fill="#000"
                fillOpacity={0.05}
                onMouseEnter={(data) => setActiveCategory(data.name)}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent mb-4 block">Engineered Expertise</span>
            <h2 className="text-5xl font-extrabold tracking-tighter text-ink leading-none">THE ARCHITECTURAL<br/>STACK.</h2>
            <p className="mt-6 text-gray-500 max-w-md leading-relaxed">
              Synthesizing quantitative modeling with production-grade engineering to build reliable, explainable AI systems.
            </p>
          </div>

          <div className="space-y-6">
            {portfolioData.skills.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => setActiveCategory(skill.name)}
                className="group cursor-pointer"
              >
                <div className="flex justify-between items-end mb-2">
                  <span className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-colors",
                    activeCategory === skill.name ? "text-accent" : "text-gray-400 group-hover:text-ink"
                  )}>
                    {skill.name}
                  </span>
                  <span className="text-xs font-bold font-mono text-accent">{skill.value}%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    className={cn(
                      "h-full transition-colors duration-500",
                      activeCategory === skill.name ? "bg-accent" : "bg-gray-300 group-hover:bg-accent/60"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl min-h-[140px] border border-gray-200 shadow-sm"
          >
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              {activeCategory ? `Specialized Toolset: ${activeCategory}` : "Select a domain to investigate"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedTools.map((tool) => (
                <span 
                  key={tool}
                  className="bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-600 px-3 py-1.5 rounded-lg border border-gray-100 font-mono"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
