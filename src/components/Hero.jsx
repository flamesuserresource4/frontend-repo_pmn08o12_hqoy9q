import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[680px] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + grain overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_45%_at_50%_0%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(45%_55%_at_80%_20%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(45%_55%_at_20%_20%,rgba(14,165,233,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 512 512\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live • Book sports in seconds
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: 'easeOut' }}
            className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            Find. Follow. Book.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300">All your sports in one place.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
            className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl"
          >
            SportLink centralizes local classes, leagues, and events from verified organizations. Follow favorites, get updates, and secure your spot with a tap.
          </motion.p>

          <motion.div
            id="download"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-xl bg-white text-gray-900 px-5 py-3 shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/30 transition-shadow"
            >
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Download on the</div>
                <div className="-mt-0.5 text-lg font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-5 py-3 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/30 transition-shadow"
            >
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-white/80">Get it on</div>
                <div className="-mt-0.5 text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
