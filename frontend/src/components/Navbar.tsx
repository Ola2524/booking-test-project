import Link from 'next/link';
import { CalendarCheck } from 'lucide-react';

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <CalendarCheck size={18} aria-hidden />
          </span>
          Booking Platform
        </Link>
        <div className="flex gap-6 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-900">Home</Link>
          <Link href="/services" className="hover:text-slate-900">Services</Link>
        </div>
      </nav>
    </header>
  );
}
