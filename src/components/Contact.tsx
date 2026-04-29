import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-grey-border">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block drop-shadow-sm">Transmission Node 01</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-[1.1] mb-12">
            Let's <br/>Connect.
          </h2>
          <p className="text-base text-grey-text font-sans leading-relaxed max-w-sm mb-16 uppercase tracking-tight">
            I am currently open to high-impact <span className="text-white-off font-medium">strategic intelligence</span> and architectural research opportunities.
          </p>
          
          <div className="flex flex-col space-y-6">
             <div className="flex items-center space-x-6 group cursor-pointer">
                <span className="block text-[9px] uppercase tracking-widest text-grey-text-light">Social Index</span>
                <div className="flex space-x-8 text-[11px] text-white-off font-medium underline underline-offset-4 decoration-grey-border-light">
                  <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-accent transition-colors">Email</a>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-grey-dark/40 border border-grey-border p-10 md:p-16 relative group"
        >
           <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                 <label className="text-[9px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans ml-1">Payload Source [Identity]</label>
                 <input 
                    type="text" 
                    placeholder="Candidate Metadata..." 
                    className="w-full bg-black-pure border border-grey-border-light/40 p-5 text-sm font-sans focus:outline-none focus:border-accent transition-all text-white-off placeholder:text-grey-border-light"
                 />
              </div>
              <div className="space-y-4">
                 <label className="text-[9px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans ml-1">Return Path [Email]</label>
                 <input 
                    type="email" 
                    placeholder="secure@node.io" 
                    className="w-full bg-black-pure border border-grey-border-light/40 p-5 text-sm font-sans focus:outline-none focus:border-accent transition-all text-white-off placeholder:text-grey-border-light"
                 />
              </div>
              <div className="space-y-4">
                 <label className="text-[9px] font-medium uppercase tracking-[0.3em] text-grey-text-light font-sans ml-1">Data Packet [Message]</label>
                 <textarea 
                    rows={4} 
                    placeholder="Decoupled architectural initiatives..." 
                    className="w-full bg-black-pure border border-grey-border-light/40 p-5 text-sm font-sans focus:outline-none focus:border-accent transition-all text-white-off placeholder:text-grey-border-light resize-none"
                 />
              </div>

              <button className="sophisticated-button w-full flex items-center justify-center gap-4 !bg-white-off !text-black-pure hover:!bg-accent hover:!text-white-off">
                 Initiate Protocol <MessageSquare size={14} />
              </button>
           </form>
        </motion.div>
      </div>

      <footer className="mt-40 pt-16 border-t border-grey-border flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-grey-text-light mb-4">Location</span>
            <span className="text-[11px] text-grey-text font-medium">New Delhi, IN</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-grey-text-light mb-4">Stack</span>
            <span className="text-[11px] text-grey-text font-medium">AI / ML / NEXT.JS</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-grey-text-light mb-4">Focus</span>
            <span className="text-[11px] text-grey-text font-medium">INTELLIGENCE</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-[0.4em] text-grey-text-light mb-4">System v1.0</span>
            <span className="text-[11px] text-grey-text font-medium">© 2024 SAHIL RAI</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-6xl font-serif text-grey-dark select-none uppercase tracking-tighter opacity-50">SAHIL RAI</div>
        </div>
      </footer>
    </section>
  );
};
