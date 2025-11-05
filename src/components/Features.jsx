import { Building2, Users, CalendarCheck } from 'lucide-react';

const features = [
  {
    title: 'For Organizations',
    description:
      'Register your sports business, list classes, trainings, and events with locations and capacity.',
    icon: Building2,
  },
  {
    title: 'For Users',
    description:
      'Browse activities by sport and location, follow favorites, and secure your spot in seconds.',
    icon: Users,
  },
  {
    title: 'Centralized Booking',
    description:
      'One profile, unified checkout, instant confirmations, and calendar sync for every booking.',
    icon: CalendarCheck,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            A powerful hub for the sports community
          </h2>
          <p className="mt-3 text-gray-600">
            We connect people with the best local organizations to make discovering and booking sports effortless.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow transition-shadow"
            >
              <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
