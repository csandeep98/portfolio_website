export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold tracking-tighter text-slate-900">
            SANDEEP.AI
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
