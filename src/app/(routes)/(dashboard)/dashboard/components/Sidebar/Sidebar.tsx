import { LogoDashboard } from '../LogoDashboard/LogoDashboard/logo';
import { SidebarRoutes } from '../SidebarRoutes';

export default function Sidebar() {
  return (
    <div className='h-screen'>
      <div className='flex h-full flex-col border-r'>
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
}
