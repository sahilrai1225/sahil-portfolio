import { motion, useScroll, useSpring } from 'motion/react';
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

  return (
    <section id="blog" className="py-32 border-t border-grey-border">
      {selectedBlog ? (
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[1px] bg-accent z-[100] origin-left"
            style={{ scaleX }}
          />

          <button 
            onClick={() => setSelectedBlog(null)}
            className="mb-16 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-grey-text-light hover:text-accent transition-colors font-mono"
          >
            <div className="w-8 h-px bg-grey-border" /> LOG_RECOVERY [BACK]
          </button>

          <header className="mb-20">
            <div className="flex items-center gap-6 text-[10px] font-medium uppercase tracking-[0.3em] text-accent mb-8 font-mono">
              <span>{selectedBlog.date}</span>
              <span className="w-1 h-1 rounded-full bg-grey-border" />
              <span>{selectedBlog.readTime}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-[1.05] mb-12">{selectedBlog.title}</h1>
            <p className="text-xl md:text-2xl text-grey-text font-serif italic border-l border-accent/40 pl-10 py-2">
              {selectedBlog.excerpt}
            </p>
          </header>

          <div className="prose prose-invert max-w-none 
            prose-headings:font-serif prose-headings:font-normal prose-headings:italic
            prose-p:text-grey-text prose-p:font-sans prose-p:leading-relaxed prose-p:text-lg
            prose-strong:text-white-off prose-strong:font-semibold
            prose-blockquote:border-accent prose-blockquote:bg-grey-dark/20 prose-blockquote:p-8
            prose-code:text-accent prose-code:bg-black-pure prose-code:px-2 prose-code:py-0.5 prose-code:rounded
          ">
            <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
            <div className="mt-24 p-12 bg-black-pure border border-grey-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={150} className="text-white" />
              </div>
              <h4 className="text-[10px] font-medium uppercase tracking-widest text-grey-text-light mb-8 font-mono">Principal Investigator</h4>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 bg-grey-dark border border-grey-border text-accent flex items-center justify-center font-serif italic text-2xl">SR</div>
                <div>
                  <div className="text-lg font-serif italic text-white-off">Sahil Rai</div>
                  <div className="text-[10px] font-medium uppercase tracking-widest text-accent">AI/ML Architect & Research Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-24 px-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-accent mb-8 block drop-shadow-sm font-sans">Theoretical Explorations</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] text-white">Selected <br/><span className="italic opacity-80 underline underline-offset-8 decoration-1 decoration-grey-border-light">Intel Logs.</span></h2>
            <p className="text-grey-text font-sans leading-relaxed max-w-md mt-12">
              Critical analysis of the convergence between machine intelligence, system reliability, and synthetic cognitive architectures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-grey-border border border-grey-border">
            {portfolioData.blogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  setSelectedBlog(blog);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group cursor-pointer p-12 bg-black-pure hover:bg-black-soft transition-all flex flex-col h-full"
              >
                <div className="flex items-center gap-4 text-[9px] font-medium uppercase tracking-[0.2em] text-accent mb-10 font-mono">
                   <div className="w-2 h-2 rounded-full border border-accent/40 flex items-center justify-center">
                     <div className="w-0.5 h-0.5 bg-accent rounded-full" />
                   </div>
                   BLOG_ENTITY_0{idx + 1}
                </div>
                <h3 className="text-4xl font-serif italic text-white-off leading-tight group-hover:text-white transition-colors mb-8">{blog.title}</h3>
                <p className="text-grey-text font-sans leading-relaxed mb-12 flex-grow text-sm line-clamp-3">{blog.excerpt}</p>
                <div className="flex justify-between items-center pt-10 border-t border-grey-border-light/10 mt-auto">
                   <span className="text-[10px] font-medium uppercase tracking-widest text-grey-text-light font-mono">{blog.readTime}</span>
                   <span className="text-[11px] font-medium text-white-off underline underline-offset-4 decoration-accent/40 group-hover:text-accent group-hover:decoration-accent transition-all">Read Manuscript</span>
                </div>
              </motion.article>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
