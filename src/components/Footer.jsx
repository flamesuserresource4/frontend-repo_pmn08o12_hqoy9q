import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} SportLink. All rights reserved.</p>
          <p className="text-xs text-white/50">Built for athletes, clubs, and communities.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#download" className="text-white/70 hover:text-white transition-colors">Download</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
          <div className="ml-2 flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="text-white/60 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#" className="text-white/60 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            <a aria-label="LinkedIn" href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
