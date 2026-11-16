import Link from 'next/link';
import { ServiceCard } from '@/components/ServiceCard';
import { getServices } from '@/lib/api/services';

export default async function LandingPage() {
  const services = (await getServices()).slice(0, 3);

  return (
    <div className="space-y-14">
      <section className="py-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Booking Platform</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Find a service, pick a time that suits you, and book in a few simple steps.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Browse services
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Popular services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
