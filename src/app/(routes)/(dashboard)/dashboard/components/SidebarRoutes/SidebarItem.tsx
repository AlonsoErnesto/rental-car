'use client';

import Link from 'next/link';

import { SidebarItemProps } from './SidebarItem.types';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function SidebarItem({ href, icon: Icon, label }: SidebarItemProps) {
  const pathName = usePathname();
  const activePath = pathName === href;
  return (
    <Link
      className={cn(
        `mt-2 flex cursor-pointer items-center gap-x-2 rounded-lg p-2 text-sm text-slate-700 hover:bg-slate-300/20`,
        activePath && 'bg-slate-400/20',
      )}
      href={href}
    >
      <Icon className='h-5 w-5' strokeWidth={1} />
      {label}
    </Link>
  );
}
