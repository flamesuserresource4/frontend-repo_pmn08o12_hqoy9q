import { motion } from 'framer-motion';
import { Building2, Users, CalendarCheck, Shield } from 'lucide-react';

const features = [
  {
    title: 'For Organizations',
    description:
      'List classes, leagues, and events with powerful tools for capacity, waitlists, and payments.',
    icon: Building2,
    hue: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'For Athletes',
    description:
      'Discover by sport and location, follow favorites, and book in seconds with calendar sync.',
    icon: Users,
    hue: 'from-fuchsia-500/20 to-cyan-500/20',
  },
  {
    title: 'Smart Booking',
    description:
      'Unified checkout, instant confirmations, reminders, and secure wallet for passes.',
    icon: CalendarCheck,
    hue: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'Verified & Safe',
    description:
      'Only trusted organizations. Clear policies, transparent pricing, and secure data.',
    icon: Shield,
    hue: 'from-blue-500/20 to-indigo-500/20',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            A modern hub for the sports community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-3 text-white/70"
          >
            Clean design, fast search, and delightful booking. Built for clubs, coaches, and athletes.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_42px_-16px_rgba(0,0,0,0.6)] transition-all"
            >
              <div className={`absolute -top-24 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${f.hue} blur-3xl opacity-60 group-hover:opacity-80 transition-opacity`} />
              <div className="relative h-11 w-11 rounded-lg bg-white/10 text-white/90 flex items-center justify-center ring-1 ring-inset ring-white/15">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="relative mt-2 text-sm text-white/70 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
