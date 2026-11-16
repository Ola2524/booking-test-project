'use client';

import { useState } from 'react';
import { formatDuration, formatPrice } from '@/lib/format';
import { mockTimeSlots } from '@/lib/mock-data';
import type { Service } from '@/lib/types';

const input =
  'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none';

// UI only: nothing is submitted anywhere.
export function BookingForm({ service }: { service: Service }) {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <form className="space-y-6 md:col-span-2" onSubmit={(e) => e.preventDefault()}>
        <label className="block text-sm font-medium text-slate-700">
          Date
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={input} />
        </label>

        <fieldset>
          <legend className="text-sm font-medium text-slate-700">Time slot</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {mockTimeSlots.map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setSlot(t)}
                className={`rounded-lg border px-3 py-1.5 text-sm ${
                  slot === t
                    ? 'border-indigo-600 bg-indigo-600 text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-indigo-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm font-medium text-slate-700">
          Full name
          <input value={name} onChange={(e) => setName(e.target.value)} className={input} />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={input} />
        </label>
      </form>

      <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-900">Booking summary</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <Row label="Service" value={service.name} />
          <Row label="Duration" value={formatDuration(service.durationMinutes)} />
          <Row label="Price" value={formatPrice(service.price)} />
          <Row label="Date" value={date || '—'} />
          <Row label="Time" value={slot || '—'} />
          <Row label="Name" value={name || '—'} />
          <Row label="Email" value={email || '—'} />
        </dl>
      </aside>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-slate-500">{label}</dt>
      <dd className="break-all text-right font-medium text-slate-900">{value}</dd>
    </div>
  );
}
