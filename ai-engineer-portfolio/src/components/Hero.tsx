import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
              Available for new opportunities
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Building intelligent <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                systems & data solutions.
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              I'm an AI Engineer and Data Scientist specializing in machine learning, 
              predictive analytics, and building scalable data pipelines. 
              Turning complex data into actionable insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/portfolio_website/Sandeep_Chilukuri_Resume_Bosch.pdf" 
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:hello@example.com" className="hover:text-indigo-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 overflow-hidden w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-200 blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-violet-200 blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-slate-200 blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
