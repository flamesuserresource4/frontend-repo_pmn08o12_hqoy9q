import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">SportLink</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
          <a href="#download" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium shadow hover:bg-black transition-colors">
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
