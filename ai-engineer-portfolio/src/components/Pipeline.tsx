import { motion } from 'motion/react';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            In The Pipeline
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl">
            What I'm currently working on and what's coming next.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Current Focus */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold">Current Focus</h3>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-indigo-500/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900"></div>
                <h4 className="text-lg font-semibold mb-2">Generative AI for Code</h4>
                <p className="text-slate-400 mb-3">
                  Building a specialized LLM fine-tuned on proprietary codebases to assist with legacy code migration.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs font-mono py-1 px-2 rounded bg-slate-800 text-indigo-300 border border-slate-700">LLMs</span>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-slate-800 text-indigo-300 border border-slate-700">Python</span>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-700">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-900"></div>
                <h4 className="text-lg font-semibold mb-2">Advanced RAG Systems</h4>
                <p className="text-slate-400">
                  Researching retrieval-augmented generation techniques to improve context window efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Up Next */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Up Next</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors">
                <span className="font-mono text-emerald-500 font-bold mt-1">01</span>
                <div>
                  <h4 className="font-semibold text-white">Autonomous Agents Framework</h4>
                  <p className="text-sm text-slate-400 mt-1">Exploring multi-agent systems for complex problem solving.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors">
                <span className="font-mono text-emerald-500 font-bold mt-1">02</span>
                <div>
                  <h4 className="font-semibold text-white">Edge AI Optimization</h4>
                  <p className="text-sm text-slate-400 mt-1">Porting transformer models to run efficiently on mobile devices.</p>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors">
                <span className="font-mono text-emerald-500 font-bold mt-1">03</span>
                <div>
                  <h4 className="font-semibold text-white">Open Source Contribution</h4>
                  <p className="text-sm text-slate-400 mt-1">Planning contributions to major ML libraries.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 pointer-events-none -z-10"></div>
    </section>
  );
}
