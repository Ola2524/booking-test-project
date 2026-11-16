import type { Service } from './types';

export const mockServices: Service[] = [
  {
    id: 'consultation',
    name: 'Initial Consultation',
    description: 'A one-on-one session to discuss your needs and goals.',
    price: 40,
    durationMinutes: 30,
  },
  {
    id: 'standard-session',
    name: 'Standard Session',
    description: 'Our most popular full-length appointment.',
    price: 90,
    durationMinutes: 60,
  },
  {
    id: 'extended-session',
    name: 'Extended Session',
    description: 'A longer appointment for more in-depth work.',
    price: 150,
    durationMinutes: 90,
  },
  {
    id: 'follow-up',
    name: 'Follow-up Visit',
    description: 'A short check-in for returning customers.',
    price: 30,
    durationMinutes: 20,
  },
];

export const mockTimeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:30', '16:30'];
