

import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { useEffect, useState } from 'react';

/* 🔥 Dynamic AI visuals */
const aiVisuals = [
  // AI / Neural Network
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",

  // Data Visualization / Analytics
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",

  // Quant / Finance Charts
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",

  // AI Abstract / Digital Brain
  "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=900&q=80",

  // Coding / ML Environment
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
];

/* 🔥 Rotating titles */
const titles = [
  "Predictive Models.",
  "Data Narratives.",
  "Deep Learning.",
  "Quantitative Rigor.",
  "System Scalability."
];

export const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);

  /* Title rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  /* Image rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % aiVisuals.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-52 pb-24">
      <div className="grid lg:grid-cols-12 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="lg:col-span-7">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-8 block font-medium">
              {portfolioData.personal.title}
            </span>
          </motion.div>

          {/* Animated Title */}
          <div className="h-[180px] md:h-[260px] mb-12">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titles[titleIdx]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-8xl font-serif leading-[1.1] text-white"
              >
                {titles[titleIdx].split(' ').map((word, i) => (
                  <span
                    key={i}
                    className={i % 2 !== 0
                      ? "italic opacity-80 underline underline-offset-[12px] decoration-grey-border-light"
                      : ""}
                  >
                    {word}{' '}
                  </span>
                ))}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-grey-text max-w-md text-sm md:text-base leading-relaxed mb-12"
          >
            Advancing the state of{" "}
            <span className="text-white-off font-medium">AI/ML engineering</span>{" "}
            through scalable systems and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-8"
          >
            <a href="#projects" className="sophisticated-button">
              View Work
            </a>
            <div className="h-[1px] w-20 bg-grey-border-light"></div>
            <span className="text-[10px] uppercase tracking-widest text-grey-text-light">
              Available for Research
            </span>
          </motion.div>

        </div>

        {/* RIGHT SIDE — DYNAMIC IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative group">

            <div className="aspect-square bg-grey-dark/20 border border-grey-border overflow-hidden relative rounded-xl">

              <AnimatePresence mode="wait">
                <motion.img
                  key={aiVisuals[imgIdx]}
                  src={aiVisuals[imgIdx]}
                  alt="AI Visual"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black-pure/50 to-transparent" />

              {/* top indicator */}
              <div className="absolute top-6 left-6 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-grey-border-light" />
              </div>

              {/* label */}
              <div className="absolute bottom-6 right-6 text-[8px] font-mono text-grey-text-light uppercase tracking-widest bg-black-pure/60 px-2 py-1 backdrop-blur-md border border-grey-border">
                AI_SYSTEM_FEED // LIVE
              </div>

            </div>

            {/* decorative frame */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-r border-t border-accent/20 -z-10 group-hover:-top-6 group-hover:-right-6 transition-all duration-700" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-l border-b border-accent/20 -z-10 group-hover:-bottom-6 group-hover:-left-6 transition-all duration-700" />

          </div>
        </motion.div>

      </div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-24 border-t border-grey-border mt-32"
      >
        <div>
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3 block">
            Core Research
          </span>
          <div className="text-4xl font-serif text-white-off">
            05+ <span className="text-xs text-grey-text">Systems</span>
          </div>
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3 block">
            Model Accuracy
          </span>
          <div className="text-4xl font-serif text-accent">
            95% <span className="text-xs text-grey-text">Precision</span>
          </div>
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3 block">
            Data Synthesis
          </span>
          <div className="text-4xl font-serif text-white-off">
            12k+ <span className="text-xs text-grey-text">Samples</span>
          </div>
        </div>

        <div>
          <span className="text-[9px] uppercase tracking-widest text-grey-text-light mb-3 block">
            Quantitative
          </span>
          <div className="text-4xl font-serif text-accent">
            2.4k <span className="text-xs text-grey-text">Hours</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};