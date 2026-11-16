import Link from 'next/link';
import { BookingForm } from '@/components/BookingForm';
import { getService } from '@/lib/api/services';

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: id } = await searchParams;
  const service = id ? await getService(id) : undefined;

  if (!service) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Book a service</h1>
        <p className="mt-2 text-slate-600">No service selected.</p>
        <Link href="/services" className="mt-4 inline-block font-medium text-indigo-600 hover:underline">
          Browse services
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Book: {service.name}</h1>
      <BookingForm service={service} />
    </div>
  );
}
