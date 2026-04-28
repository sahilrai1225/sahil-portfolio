import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';
import { BrainCircuit, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 border-t border-gray-100">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">The Philosophy</span>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Engineering rigor meets <span className="text-gray-400">algorithmic intuition.</span>
          </h2>
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
            <p>
              I approach software not just as code, but as a dynamic system capable of self-optimization. My background in AI/ML is rooted in the belief that data is the ultimate arbiter of truth in business strategy.
            </p>
            <p>
              Whether it's designing a high-latency financial forecasting engine or a sub-second semantic retrieval system, my focus remains constant: <span className="text-black font-semibold">Reliability, Scalability, and Explainability.</span>
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pb-24">
          <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-black transition-colors group">
            <div className="bg-gray-50 p-3 rounded-2xl w-fit mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <BrainCircuit size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Systems Thinking</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Understanding global dependencies before local optimizations.</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-black transition-colors group">
            <div className="bg-gray-50 p-3 rounded-2xl w-fit mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <Cpu size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Quant Mindset</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Leveraging statistical rigor to validate every architectural choice.</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-black transition-colors group">
            <div className="bg-gray-50 p-3 rounded-2xl w-fit mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <Zap size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Rapid Iteration</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Pushing models to production early to gather real-world telemetry.</p>
          </div>
          <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-black transition-colors group">
            <div className="bg-gray-50 p-3 rounded-2xl w-fit mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Security Focus</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Ensuring data integrity and model robustness against adversarial actors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
