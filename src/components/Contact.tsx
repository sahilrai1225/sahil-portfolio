import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-accent-soft/20">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">Transmission Node</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-ink leading-[1.1] uppercase mb-10">
            Let's <br/>Connect.
          </h2>
          <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-sm mb-12 uppercase tracking-tight">
            I am currently open to high-impact <span className="text-ink">strategic intelligence</span> and engineering opportunities.
          </p>
          
          <div className="space-y-6">
             <a href={portfolioData.personal.github} className="text-xs font-black uppercase tracking-[0.2em] text-ink block hover:text-accent transition-colors">GitHub</a>
             <a href={portfolioData.personal.linkedin} className="text-xs font-black uppercase tracking-[0.2em] text-ink block hover:text-accent transition-colors">LinkedIn</a>
             <a href={`mailto:${portfolioData.personal.email}`} className="text-xs font-black uppercase tracking-[0.2em] text-ink block hover:text-accent transition-colors">Email</a>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-accent/5 border border-accent-soft/10"
        >
           <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                 <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4 font-mono">Payload Source [Name]</label>
                 <input 
                    type="text" 
                    placeholder="e.g. Satoshi Nakamoto" 
                    className="w-full bg-bg-warm/50 border border-accent-soft/20 rounded-2xl p-5 text-sm focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                 />
              </div>
              <div className="space-y-3">
                 <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4 font-mono">Return Path [Email]</label>
                 <input 
                    type="email" 
                    placeholder="e.g. satoshi@bitcoin.org" 
                    className="w-full bg-bg-warm/50 border border-accent-soft/20 rounded-2xl p-5 text-sm focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                 />
              </div>
              <div className="space-y-3">
                 <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-4 font-mono">Data Packet [Message]</label>
                 <textarea 
                    rows={4} 
                    placeholder="Discussing architectural possibilities..." 
                    className="w-full bg-bg-warm/50 border border-accent-soft/20 rounded-2xl p-5 text-sm focus:outline-none focus:border-accent transition-all placeholder:text-gray-300 resize-none"
                 />
              </div>

              <button className="w-full bg-accent text-bg-warm px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-2xl hover:shadow-accent/30 transition-all flex items-center justify-center gap-3 group">
                 Launch Transmission <MessageSquare size={16} className="group-hover:rotate-12 transition-transform" />
              </button>
           </form>
        </motion.div>
      </div>

      <div className="mt-40 pt-10 border-t border-accent-soft/10 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-400">© 2026 Sahil Rai // System Architecture v4.0.2</div>
         <div className="flex gap-8">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-300">Neural Engine</span>
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-300">Decision Logic</span>
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-300">Data Substrate</span>
         </div>
      </div>
    </section>
  );
};
