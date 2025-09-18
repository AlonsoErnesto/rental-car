import NavbarDashboard from './dashboard/components/NavbarDashboard/NavbarDashboard';
import Sidebar from './dashboard/components/Sidebar/Sidebar';

export default function LayoutDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-full w-full'>
      <div className='hidden h-full w-80 border-r border-slate-400/20 xl:fixed xl:block'>
        <Sidebar />
      </div>
      <div className='h-full w-full xl:ml-80'>
        <NavbarDashboard />
        <div className='h-max p-6'>{children}</div>
      </div>
    </div>
  );
}
