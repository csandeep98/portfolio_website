import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-slate-600 mb-10">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a 
            href="sandeepchilukurik@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/csandeep98" className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group">
            <div className="p-3 bg-white rounded-full shadow-sm border border-slate-200 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
              <Github className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/sandeep-chilukuri" className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-700 transition-colors group">
            <div className="p-3 bg-white rounded-full shadow-sm border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
              <Linkedin className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a href="#" className="flex flex-col items-center gap-2 text-slate-500 hover:text-sky-500 transition-colors group">
            <div className="p-3 bg-white rounded-full shadow-sm border border-slate-200 group-hover:border-sky-200 group-hover:bg-sky-50 transition-colors">
              <Twitter className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
