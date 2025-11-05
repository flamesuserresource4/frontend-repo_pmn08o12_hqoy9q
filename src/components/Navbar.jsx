import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#0b0b12]/40 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0b0b12]/40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white grid place-items-center shadow-lg shadow-indigo-900/30">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">SportLink</span>
        </a>
        <div className="hidden sm:flex items-center gap-1">
          <a href="#features" className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-md">Features</a>
          <a href="#download" className="ml-1 inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors">
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
