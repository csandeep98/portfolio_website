import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Agentic SQL Analyst",
    description: "Developed a multi-agent AI system that converts natural language questions into SQL queries and provides intelligent data analysis, enabling non-technical users to query complex databases through conversational interface.",
    tags: ["Python", "LangChain", "Streamlit", "Ollama", "SQLite", "AI Agents"],
    github: "https://github.com/csandeep98/agentic-sql-analyst",
    demo: "https://example.com",
    image: "https://picsum.photos/seed/agentic-sql-analyst/600/400"
},
  {
    title: "NLP Sentiment Analyzer",
    description: "Built a transformer-based model to analyze customer feedback in real-time, visualizing trends on a custom dashboard.",
    tags: ["PyTorch", "Hugging Face", "FastAPI", "D3.js"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://picsum.photos/seed/project2/600/400"
  },
  {
    title: "Computer Vision for Retail",
    description: "Implemented an object detection system for automated inventory management using YOLOv8 and edge computing.",
    tags: ["OpenCV", "YOLO", "Edge Impulse", "C++"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://picsum.photos/seed/project3/600/400"
  },
  {
    title: "Financial Forecasting Model",
    description: "Created a time-series forecasting model for stock market trends using LSTM networks and alternative data sources.",
    tags: ["Python", "Keras", "Pandas", "Streamlit"],
    github: "https://github.com",
    demo: "https://example.com",
    image: "https://picsum.photos/seed/project4/600/400"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A selection of my recent work in AI and Data Science.
            </p>
          </div>
          <a href="https://github.com" className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
            View all on GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-slate-400 hover:text-slate-900 transition-colors" title="View Code">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-slate-400 hover:text-slate-900 transition-colors" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
          <a href="https://github.com" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
            View all on GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
