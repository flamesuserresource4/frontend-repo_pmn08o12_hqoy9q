export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} SportLink. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="#download" className="text-gray-700 hover:text-gray-900">Download</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
