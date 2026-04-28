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
    <section id="blog" className="py-24">
      {selectedBlog ? (
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <motion.div 
            className="fixed top-16 left-0 right-0 h-1 bg-accent z-50 origin-left"
            style={{ scaleX }}
          />

          <button 
            onClick={() => setSelectedBlog(null)}
            className="mb-12 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog Log
          </button>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-4 font-mono">
              <Calendar size={14} /> {selectedBlog.date} • <Clock size={14} /> {selectedBlog.readTime}
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-8 uppercase leading-tight">{selectedBlog.title}</h1>
            <p className="text-xl text-gray-500 leading-relaxed italic border-l-4 border-accent pl-6">
              {selectedBlog.excerpt}
            </p>
          </header>

          <div className="prose prose-slate lg:prose-lg max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed">
            <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
            <p className="text-gray-500 mt-12">
               This is a premium research article summarizing deep technical insights in modern AI architectures. Sahil Rai explores the balance between computational cost and model precision in real-time prediction environments.
            </p>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 mt-12">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">The Author</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full text-white flex items-center justify-center font-bold italic">SR</div>
                <div>
                  <div className="font-bold">Sahil Rai</div>
                  <div className="text-xs text-gray-500">AI/ML Engineer & Researcher</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-6 block">Intelligence Logs</span>
            <h2 className="text-5xl font-black tracking-tighter text-ink leading-[1.1] uppercase mb-8">Selected <br/>Blogs.</h2>
            <p className="text-gray-500 font-medium leading-relaxed max-w-2xl">
              Exploring the convergence of system logic, architectural reliability, and the evolution of intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
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
                className="group cursor-pointer p-10 rounded-[3rem] border border-accent-soft/10 bg-white hover:border-accent hover:shadow-[0_40px_100px_-20px_rgba(184,157,119,0.15)] transition-all flex flex-col"
              >
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent mb-8">
                   <BookOpen size={12} /> BLOG_LOG: {idx + 1}
                </div>
                <h3 className="text-3xl font-black tracking-[-0.03em] text-ink leading-tight uppercase group-hover:text-accent transition-colors mb-6">{blog.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow uppercase tracking-tight text-xs">{blog.excerpt}</p>
                <div className="flex justify-between items-center pt-8 border-t border-accent-soft/10 mt-auto">
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{blog.readTime}</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-ink group-hover:mr-2 transition-all">Read Story →</span>
                </div>
              </motion.article>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
