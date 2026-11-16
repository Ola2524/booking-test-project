import Link from 'next/link';
import { Clock } from 'lucide-react';
import { formatDuration, formatPrice } from '@/lib/format';
import type { Service } from '@/lib/types';

export function ServiceCard({ service, showAction = false }: { service: Service; showAction?: boolean }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-600">{service.description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-900">{formatPrice(service.price)}</span>
        <span className="flex items-center gap-1 text-slate-500">
          <Clock size={14} aria-hidden /> {formatDuration(service.durationMinutes)}
        </span>
      </div>
      {showAction && (
        <Link
          href={`/booking?service=${service.id}`}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-700"
        >
          Select service
        </Link>
      )}
    </div>
  );
}
