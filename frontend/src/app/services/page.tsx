import { ServiceCard } from '@/components/ServiceCard';
import { getServices } from '@/lib/api/services';

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div>
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-2 text-slate-600">Choose a service to continue.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} showAction />
        ))}
      </div>
    </div>
  );
}
