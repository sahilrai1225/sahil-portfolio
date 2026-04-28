import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-gray-100 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Direct Access</span>
        <h2 className="text-6xl font-bold tracking-tighter text-gray-900 mb-8">Let's build something <span className="text-gray-400">intelligent.</span></h2>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed">
          Currently open to collaborating on high-impact AI/ML infrastructure and quantitative development projects.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href={`mailto:${portfolioData.personal.email}`} className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
            <Mail size={18} /> Initiate Contact
          </a>
          <div className="flex gap-4">
             <a href={portfolioData.personal.linkedin} className="bg-white border border-gray-100 p-4 rounded-2xl text-gray-400 hover:text-black hover:border-black transition-all">
                <Linkedin size={20} />
             </a>
             <a href={portfolioData.personal.github} className="bg-white border border-gray-100 p-4 rounded-2xl text-gray-400 hover:text-black hover:border-black transition-all">
                <Github size={20} />
             </a>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-gray-100 w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 gap-4">
           <div>© 2026 Sahil Rai. All Rights Reserved.</div>
           <div>Designed as a High-End Product Experience</div>
           <div className="flex items-center gap-2">Built with <span className="text-black">React + Framer + Recharts</span></div>
        </div>
      </motion.div>
    </section>
  );
};
