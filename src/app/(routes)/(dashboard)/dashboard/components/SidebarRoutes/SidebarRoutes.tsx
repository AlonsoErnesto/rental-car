'use client';

import { useAuth } from '@clerk/nextjs';
import { isAdministrator } from '@/lib/isAdministrator';
import { SidebarItem } from './SidebarItem';
import { listNavigateAdmin, listNavigateGeneral } from './SidebarRoutes.data';

export function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className='flex h-full flex-col justify-between'>
      <div>
        <div className='border-b border-slate-400/20 p-2 md:p-6'>
          <p className='mb-2 text-slate-500'>General</p>
          {listNavigateGeneral.map(item => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
        {isAdministrator(userId) && (
          <div className='p-2 md:p-6 '>
            <p className='mb-2 text-slate-500'>Admin</p>
            {listNavigateAdmin.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
