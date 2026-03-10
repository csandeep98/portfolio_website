import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative">
              <img 
                src="https://picsum.photos/seed/ai-engineer/800/800" 
                alt="AI Engineer working" 
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 shadow-lg">
              <span className="font-mono text-xs font-bold text-slate-900">EST. 2021</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              About Me
            </h2>
            <div className="prose prose-slate prose-lg text-slate-600">
              <p className="mb-4">
                Hello I am <b>Sandeep Chilukuri </b>a passionate AI Engineer and Data Scientist with a deep interest in 
                building intelligent systems that solve real-world problems. My journey 
                began with a fascination for how data can be used to predict outcomes 
                and automate complex tasks.
              </p>
              <p className="mb-4">
                With a strong foundation in mathematics and computer science, I specialize 
                in machine learning, deep learning, and natural language processing. 
                I enjoy working on challenging projects that require a blend of theoretical 
                knowledge and practical engineering skills.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest research papers, 
                contributing to open-source projects, or hiking in the mountains.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-bold text-2xl text-indigo-600">4+</h3>
                <p className="text-sm text-slate-500 font-medium">Years Experience</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-bold text-2xl text-indigo-600">10+</h3>
                <p className="text-sm text-slate-500 font-medium">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
