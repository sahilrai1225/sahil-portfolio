import { motion, AnimatePresence, useScroll } from "motion/react";
import { useState, useRef } from "react";
import { portfolioData, Project } from "../data/portfolio";
import { Database, Brain, Code2, LineChart, Code } from "lucide-react";

// ✅ YOUR LOCAL IMAGES
import telecomImg from "../assets/telecom.png";
import ragImg from "../assets/rag.png";
import lstmImg from "../assets/lstm.png";
import securityImg from "../assets/security.png";

// ✅ IMAGE MAP (AUTO ASSIGN BASED ON TITLE)
const imageMap: Record<string, string> = {
  "Telecom Analytics Engine": telecomImg,
  "Production RAG System": ragImg,
  "LSTM Forecasting Engine": lstmImg,
  "Security Vector Shield": securityImg,
};

export const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();

  return (
    <section id="projects" ref={containerRef} className="py-32 bg-black-pure border-t border-grey-border relative">
      
      {/* 🔥 SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[100]"
      />

      {/* HEADER */}
      <div className="text-center mb-24 relative z-10 px-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent block mb-4 font-mono">
          Case Studies
        </span>

        <h2 className="text-5xl md:text-7xl font-serif text-white">
          Engineered Intelligence
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-px bg-grey-border border border-grey-border max-w-7xl mx-auto relative z-10">
        {portfolioData.projects.map((project, i) => {

          // ✅ AUTO IMAGE PICK
          const imgSrc = imageMap[project.title] || project.image;

          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group p-10 md:p-12 bg-black-pure cursor-pointer hover:bg-grey-dark transition-colors"
            >
              <div className="aspect-[16/9] mb-8 bg-grey-dark relative overflow-hidden border border-grey-border flex items-center justify-center group-hover:border-grey-border-light transition-colors">
                
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition duration-700"
                  />
                ) : (
                  <div className="opacity-20 group-hover:opacity-40 transition-opacity">
                    {project.category === 'AI/ML' && <Brain size={80} className="text-white-off" />}
                    {project.category === 'NLP' && <Code2 size={80} className="text-white-off" />}
                    {project.category === 'Data Science' && <Database size={80} className="text-white-off" />}
                    {project.category === 'BI & Analytics' && <LineChart size={80} className="text-white-off" />}
                  </div>
                )}

              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-serif italic text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="text-[9px] uppercase tracking-widest text-grey-text border border-grey-border px-3 py-1 mt-2">
                  0{i + 1}
                </span>
              </div>

              <p className="text-grey-text text-sm line-clamp-2 leading-relaxed mb-8">
                {project.oneLiner}
              </p>

              <div className="text-[10px] tracking-[0.3em] font-medium text-accent flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                VIEW CASE <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================== CASE STUDY MODAL ================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black-pure/95 backdrop-blur-xl z-[100] overflow-y-auto custom-scrollbar flex justify-center items-start lg:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              className="w-full max-w-7xl mx-auto bg-black-pure border border-grey-border my-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-[280px_1fr] relative">
                
                {/* SIDEBAR */}
                <div className="hidden lg:block border-r border-grey-border p-10 bg-grey-dark/30 sticky top-0 self-start h-full max-h-[85vh] overflow-y-auto">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-accent mb-8 font-mono border-b border-grey-border pb-4">
                    Case Directory
                  </div>
                  <div className="text-sm text-grey-text space-y-5">
                    <SidebarItem id="overview" title="Overview" />
                    <SidebarItem id="problem" title="Problem" />
                    <SidebarItem id="data-pipeline" title="Pipeline" />
                    <SidebarItem id="methodology" title="Methodology" />
                    <SidebarItem id="architecture" title="Architecture" />
                    <SidebarItem id="challenges" title="Challenges" />
                    <SidebarItem id="results" title="Results" />
                    <SidebarItem id="impact" title="Impact" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-10 md:p-16 lg:p-24 max-h-[85vh] overflow-y-auto">
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-8 right-8 text-xs text-grey-text"
                  >
                    Close
                  </button>

                  <h1 className="text-5xl font-serif text-white mb-10">
                    {selectedProject.title}
                  </h1>

                  <Section title="Overview" highlight>
                    {selectedProject.longIntro || selectedProject.oneLiner}
                  </Section>

                  <Section title="Problem">
                    {selectedProject.problem}
                  </Section>

                  <Section title="Pipeline">
                    {selectedProject.pipeline}
                  </Section>

                  <Section title="Methodology">
                    {selectedProject.methodology}
                  </Section>

                  <Section title="Architecture">
                    {selectedProject.systemDesign}
                  </Section>

                  <Section title="Challenges">
                    {selectedProject.challenges}
                  </Section>

                  <Section title="Results" highlight>
                    {selectedProject.results}
                  </Section>

                  <Section title="Impact">
                    {selectedProject.impactExplanation}
                  </Section>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* COMPONENTS */

const SidebarItem = ({ id, title }: { id: string; title: string }) => {
  return <div className="hover:text-accent cursor-pointer">{title}</div>;
};

const Section = ({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <div className="mb-16 border-l border-grey-border pl-6">
    <h3 className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
      {title}
    </h3>

    <p className={highlight ? "text-white text-lg" : "text-grey-text"}>
      {children}
    </p>
  </div>
);