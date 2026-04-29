import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { portfolioData, BlogPost } from '../data/portfolio';
import { useState, useEffect } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const BlogSystem = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBlog]);

  return (
    <section id="blog" className="py-32 border-t border-grey-border relative">
      <div className="mb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block drop-shadow-sm font-sans">Theoretical Explorations</span>
        <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white">Selected <br/><span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-grey-border-light">Intel Logs.</span></h2>
        <p className="text-grey-text font-sans leading-relaxed max-w-md mt-12">
          Critical analysis of the convergence between machine intelligence, system reliability, and synthetic cognitive architectures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-grey-border border border-grey-border max-w-7xl mx-auto">
        {portfolioData.blogs.map((blog, idx) => (
          <motion.article
            key={blog.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setSelectedBlog(blog)}
            className="group cursor-pointer p-12 bg-black-pure hover:bg-grey-dark transition-colors flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-10">
               <div className="flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.3em] text-accent font-mono">
                 <div className="w-2 h-2 rounded-full border border-accent/40 flex items-center justify-center">
                   <div className="w-0.5 h-0.5 bg-accent rounded-full" />
                 </div>
                 LOG_ENTRY_0{idx + 1}
               </div>
               <span className="text-[9px] uppercase tracking-widest text-grey-text-light font-mono">{blog.readTime}</span>
            </div>
            
            <h3 className="text-3xl font-serif italic text-white-off leading-tight group-hover:text-white transition-colors mb-6">{blog.title}</h3>
            
            <p className="text-grey-text font-serif leading-relaxed mb-12 flex-grow text-base opacity-80">{blog.excerpt}</p>
            
            <div className="flex items-center pt-8 border-t border-grey-border mt-auto">
               <span className="text-[10px] font-medium text-accent uppercase tracking-[0.3em] font-sans group-hover:translate-x-2 transition-transform">Read Manuscript →</span>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black-pure/95 backdrop-blur-xl overflow-y-auto custom-scrollbar flex justify-center items-start lg:items-center p-0 md:p-8"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="w-full max-w-4xl mx-auto bg-black-pure border border-grey-border my-0 md:my-12 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress Bar inside modal */}
              <motion.div 
                className="sticky top-0 left-0 right-0 h-[2px] bg-accent z-50 origin-left"
                style={{ scaleX }}
              />

              <div className="p-8 md:p-16 lg:p-24 overflow-y-auto max-h-screen md:max-h-[85vh] custom-scrollbar relative">
                
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="sticky top-0 float-right z-50 text-[10px] uppercase tracking-widest text-grey-text-light hover:text-white border border-grey-border hover:border-grey-border-light px-4 py-2 transition-colors bg-black-pure/80 backdrop-blur-sm"
                >
                  Close
                </button>

                <header className="mb-20 pt-12 md:pt-0">
                  <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.3em] text-accent mb-10 font-mono">
                    <span>{selectedBlog.date}</span>
                    <span className="w-1 h-1 bg-grey-border" />
                    <span>{selectedBlog.readTime}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-12">{selectedBlog.title}</h1>
                  
                  <p className="text-xl md:text-2xl text-grey-text font-serif italic border-l border-accent/40 pl-8 py-2">
                    {selectedBlog.excerpt}
                  </p>
                </header>

                <div className="prose prose-invert max-w-none 
                  prose-headings:font-serif prose-headings:font-normal prose-headings:italic prose-headings:text-white prose-headings:mt-16 prose-headings:mb-8
                  prose-h2:text-3xl prose-h3:text-2xl
                  prose-p:text-grey-text prose-p:font-serif prose-p:leading-[1.8] prose-p:text-[1.1rem] prose-p:mb-8
                  prose-strong:text-white-off prose-strong:font-semibold
                  prose-ul:text-grey-text prose-ul:font-serif prose-ul:leading-[1.8] prose-ul:text-[1.1rem]
                  prose-li:my-3
                  prose-blockquote:border-accent prose-blockquote:bg-grey-dark/20 prose-blockquote:p-8 prose-blockquote:text-white-off prose-blockquote:italic
                  prose-code:text-accent prose-code:bg-grey-dark/50 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
                ">
                  <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
                  
                  <div className="mt-24 p-10 md:p-14 bg-grey-dark/30 border border-grey-border relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                      <BookOpen size={120} className="text-white" />
                    </div>
                    <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-grey-text-light mb-10 font-mono">Principal Investigator</h4>
                    <div className="flex items-center gap-8 relative z-10">
                      <div className="w-16 h-16 bg-black-pure border border-grey-border text-accent flex items-center justify-center font-serif italic text-2xl">SR</div>
                      <div>
                        <div className="text-2xl font-serif italic text-white-off mb-2">Sahil Rai</div>
                        <div className="text-[10px] uppercase tracking-[0.3em] font-sans text-accent">AI/ML Architect & Research Lead</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-16 mt-16 border-t border-grey-border flex justify-between items-center">
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="text-accent hover:text-white font-mono tracking-[0.3em] text-[10px] uppercase transition-colors"
                  >
                    ← BACK TO EXPLORATIONS
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
