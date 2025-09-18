import { Calendar, Car, Heart, Notebook, SquareChartGantt } from 'lucide-react';

export const listNavigateGeneral = [
  {
    icon: Car,
    label: 'Cars',
    href: '/dashboard',
  },
  {
    icon: Calendar,
    label: 'Cards Reserves',
    href: '/reserves',
  },
  {
    icon: Heart,
    label: 'Loved Cars',
    href: '/loved-cars',
  },
];

export const listNavigateAdmin = [
  {
    icon: SquareChartGantt,
    label: 'Manage you cars',
    href: '/dashboard/admin/cars-manager',
  },
  {
    icon: Notebook,
    label: 'All reserves',
    href: '/dashboard/admin/reserves-admin',
  },
];
