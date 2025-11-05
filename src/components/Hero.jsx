import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-black/5 px-3 py-1 text-xs text-gray-700 shadow-sm mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live sports, events, and trainings near you
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Your gateway to sports activities anywhere
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            A centralized library of classes, events, and trainings from verified sports businesses. Discover, follow, and book — all in one place.
          </p>

          <div id="download" className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-xl bg-black text-white px-5 py-3 shadow hover:shadow-md transition-shadow"
            >
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-white/70">Download on the</div>
                <div className="-mt-0.5 text-lg font-semibold">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-xl bg-green-600 text-white px-5 py-3 shadow hover:shadow-md transition-shadow"
            >
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-white/80">Get it on</div>
                <div className="-mt-0.5 text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
